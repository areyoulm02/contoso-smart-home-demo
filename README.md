# Contoso Voice Agent

这个项目是一个语音助手应用，包含前端网页界面和后端API服务。

## 本地开发指南

### 前端开发
```bash
# 进入前端目录
cd web

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 后端开发
```bash
# 安装Python依赖
pip install -r requirements.txt

# 启动后端服务
uvicorn api.main:app --reload
```

## 代码修改流程

### Git 工作流程

1. 拉取最新代码（如果需要）
```bash
git pull origin main
```

2. 修改代码后提交
```bash
git add .
git commit -m "描述你的修改"
```

3. 推送到远程仓库
```bash
git push origin main
```

## 部署指南

### 后端部署

1. 安装Docker（如果尚未安装）
2. 构建Docker镜像
```bash
# 进入API目录
cd api

# 构建Docker镜像
docker build -t contosoacr123.azurecr.io/contoso-voice-agent:latest .
```

3. 登录到Azure
```bash
# 登录到Azure CLI
az login

# 登录到Azure容器注册表
az acr login --name contosoacr123
```

4. 推送Docker镜像
```bash
# 推送镜像到Azure容器注册表（此步骤可能需要一些时间）
docker push contosoacr123.azurecr.io/contoso-voice-agent:latest
```

5. 更新Azure容器应用
   - 在Azure门户中找到对应的Container App
   - 点击"刷新镜像"或"重启"应用

6. 部署到GitHub Repo或其他托管服务
   - 自动部署通过GitHub Actions完成
   - 检查GitHub仓库的Actions标签页查看部署状态