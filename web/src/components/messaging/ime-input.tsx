"use client";
import { useRef, useState, useEffect } from 'react';

interface ImeInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  className?: string;
  placeholder?: string;
}

/**
 * 一个专门为处理IME输入（尤其是中文、日文、韩文等）优化的输入组件
 */
const ImeInput: React.FC<ImeInputProps> = ({ 
  value, 
  onChange, 
  onEnter, 
  className,
  placeholder 
}) => {
  // 控制输入框显示的值
  const [displayValue, setDisplayValue] = useState(value);
  // 跟踪IME合成状态
  const [isComposing, setIsComposing] = useState(false);
  // 用于直接操作DOM元素
  const inputRef = useRef<HTMLInputElement>(null);

  // 当外部value改变时同步显示值
  useEffect(() => {
    // 只在非合成状态下同步值，避免干扰中文输入过程
    if (!isComposing) {
      setDisplayValue(value);
    }
  }, [value, isComposing]);

  // 处理IME合成开始
  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  // 处理IME合成结束
  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false);
    // 合成结束时，将最终的输入值同步给父组件
    const target = e.target as HTMLInputElement;
    onChange(target.value);
  };

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // 总是更新本地显示值，保证用户看到他们正在输入的内容
    setDisplayValue(newValue);
    
    // 只有在不处于IME合成状态时才更新父组件的值
    if (!isComposing) {
      onChange(newValue);
    }
  };

  // 处理按键
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 只有在不处于IME合成状态且按下的是Enter键时才触发回车事件
    if (e.key === 'Enter' && !isComposing) {
      e.preventDefault();
      onEnter();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={displayValue}
      onChange={handleChange}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      onKeyDown={handleKeyDown}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default ImeInput;
