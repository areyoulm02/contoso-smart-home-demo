"use client";
import Message from "./message";
import styles from "./chat.module.css";
import { useEffect, useRef, useState } from "react";
import { GrPowerReset, GrClose, GrBeacon } from "react-icons/gr";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { ChatState, Turn, useChatStore } from "@/store/chat";
import ImeInput from "./ime-input";
import usePersistStore from "@/store/usePersistStore";
import FileImagePicker from "./fileimagepicker";
import { fetchCachedImage, removeCachedBlob } from "@/store/images";
import VideoImagePicker from "./videoimagepicker";
import { WS_ENDPOINT } from "@/store/endpoint";
import { SocketMessage, SocketServer } from "@/store/socket";
import clsx from "clsx";
import { ContextState, useContextStore } from "@/store/context";
import { ActionClient } from "@/socket/action";
import { useUserStore } from "@/store/user";

interface ChatOptions {
  video?: boolean;
  file?: boolean;
}
type Props = {
  options?: ChatOptions;
};

const Chat = ({ options }: Props) => {
  /** Socket */
  const server = useRef<SocketServer | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  /** STORE */
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const state = usePersistStore(useChatStore, (state) => state);
  const stateRef = useRef<ChatState | undefined>();

  const context = usePersistStore(useContextStore, (state) => state);
  const contextRef = useRef<ContextState | undefined>();

  const user = usePersistStore(useUserStore, (state) => state.user);
  const userState = usePersistStore(useUserStore, (state) => state);

  /** Current State */
  useEffect(() => {
    stateRef.current = state;

    if (state && state.currentImage) {
      fetchCachedImage(state.currentImage, setCurrentImage).then(() => {
        scrollChat();
      });
    }
  }, [state]);

  /** Current Context */
  useEffect(() => {
    contextRef.current = context;
  }, [context]);


  /** Send */
  const sendMessage = async () => {
    if (stateRef.current) {
      // get current message
      const turn: Turn = {
        name: user?.name || "Louise Han",
        avatar: user?.image || "undefined",
        image: stateRef.current.currentImage,
        message: stateRef.current.message,
        status: "done",
        type: "user",
      };

      // can replace with current user
      stateRef.current.sendMessage(
        user?.name || "Louise Han",
        user?.image || "undefined"
      );
      // reset image
      setCurrentImage(null);

      // process on server
      //execute(turn);
      if (server.current && server.current.ready) {
        await server.current.sendTurn(turn);
      }
    }
  };

  /** Events */
  const serverCallback = (data: SocketMessage) => {
    if (data.role === "error") {
      if (stateRef.current) {
        // 更新之前的waiting消息为done
        stateRef.current.turns.forEach((turn) => {
          if (turn.status === "waiting") {
            turn.status = "done";
            turn.message = data.content;
          }
        });

        // 插入错误消息
        // stateRef.current.sendFullMessage({
        //   name: "系统错误",
        //   avatar: "",
        //   image: null,
        //   message: data.content,
        //   status: "done",
        //   type: "assistant",
        // });

        scrollChat();
      }
      return;
    }

    // 正常消息处理逻辑...
    if (stateRef.current && contextRef.current) {
      const client = new ActionClient(stateRef.current, contextRef.current);
      client.execute(data);
      scrollChat();
    }
  };

  const manageConnection = () => {
    if (server.current && server.current.ready) {
      server.current.close();
      server.current = null;
    } else {
      if (stateRef.current && stateRef.current.threadId) {
        createSocket(stateRef.current.threadId);
      }
    }
  };

  const createSocket = (threadId: string) => {
    console.log("Starting Socket (" + threadId + ")");
    const endpoint = WS_ENDPOINT.endsWith("/")
      ? WS_ENDPOINT.slice(0, -1)
      : WS_ENDPOINT;
    server.current = new SocketServer(
      endpoint + "/api/chat",
      threadId,
      () => setConnected(true),
      () => setConnected(false)
    );
    server.current.addListener("chat", serverCallback);
  };

  const clear = () => {
    if (state) state.resetChat();
    if (context) context.clearContext();
    if (server.current && server.current.ready) {
      server.current.close();
      server.current = null;
    }
    if(userState) userState.resetUser();
    clearImage();
  };

  const clearImage = () => {
    // remove image from cache
    if (state?.currentImage) {
      removeCachedBlob(state?.currentImage);
    }
    if (state) state.setCurrentImage(null);
    setCurrentImage(null);
  };

  /** Updates */
  const chatDiv = useRef<HTMLDivElement>(null);

  const scrollChat = () => {
    setTimeout(() => {
      if (chatDiv.current) {
        chatDiv.current.scrollTo({
          top: chatDiv.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 10);
  };

  useEffect(() => {
    scrollChat();
  }, [state?.turns.length, state?.currentImage]);

  return (
    <>
      <div className={state?.open ? styles.overlay : styles.hidden}></div>
      <div className={styles.chat}>
        {state && state?.open && (
          <div className={styles.chatWindow}>
            <div className={styles.chatHeader}>
              <GrPowerReset
                size={18}
                className={styles.chatIcon}
                onClick={() => clear()}
              />
              <div className={"grow"} />
              <div>
                <GrBeacon
                  size={18}
                  className={clsx(
                    styles.chatIcon,
                    connected ? styles.connected : styles.disconnected
                  )}
                  onClick={() => manageConnection()}
                />
              </div>
              <div>
                <GrClose
                  size={18}
                  className={styles.chatIcon}
                  onClick={() => state && state.setOpen(false)}
                />
              </div>
            </div>
            {/* chat section */}
            <div className={styles.chatSection} ref={chatDiv}>
              <div className={styles.chatMessages}>
                {state &&
                  state.turns.map((turn, index) => (
                    <Message key={index} turn={turn} notify={scrollChat} />
                  ))}
              </div>
            </div>
            {/* image section */}
            {currentImage && (
              <div className={styles.chatImageSection}>
                <img
                  src={currentImage}
                  className={styles.chatImage}
                  alt="Current Image"
                  onClick={() => clearImage()}
                />
              </div>
            )}
            {/* chat input section */}
            <div className={styles.chatInputSection}>
              {state && (
                <ImeInput
                  value={state.message}
                  onChange={(value) => state.setMessage(value)}
                  onEnter={sendMessage}
                  className={styles.chatInput}
                  placeholder="Type your message here..."
                />
              )}
              {options && options.file && (
                <FileImagePicker setCurrentImage={state.setCurrentImage} />
              )}
              {options && options.video && (
                <VideoImagePicker setCurrentImage={state.setCurrentImage} />
              )}
              <button
                type="button"
                title="Send Message"
                className={"button"}
                onClick={sendMessage}
              >
                <HiOutlinePaperAirplane size={24} className={"buttonIcon"} />
              </button>
            </div>
          </div>
        )}
        <div
          className={styles.chatButton}
          onClick={() => {
            if (state) state.setOpen(!state.open);
            scrollChat();
          }}
        >
          {state?.open ? (
            <GrClose size={24} />
          ) : (
            <HiOutlineChatBubbleLeftRight size={32} />
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
