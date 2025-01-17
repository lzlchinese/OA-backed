# OA-backed

OA系统的后端接口

## 安装与运行

1. **全局安装 `express-generator`**  
   运行以下命令来全局安装 Express 生成器：

   ```bash
   npm install -g express-generator
   ```

2. **创建项目**  
   使用 Express 生成器创建项目：

   ```bash
   express OA-BACKED
   ```
   
3. **进入项目目录**  
   切换到项目的根目录：

   ```bash
   cd OA-BACKED
   ```
   
4. **安装项目依赖**  
   在项目目录中安装所有依赖：

   ```bash
   npm install
   ```
   
5. **启动项目**  
   运行以下命令启动项目：

   ```bash
   npm start
   ```

   默认情况下，应用会在 http://localhost:3000 端口启动。

   ## 项目结构
   ```text
   OA-BACKED/
    ├── bin/
    │   └── www              # 服务器启动脚本
    ├── node_modules/        # 项目依赖模块
    ├── public/              # 静态文件（如样式、图片等）
    ├── routes/              # 定义路由
    │   ├── index.js
    │   └── users.js
    ├── views/               # 视图模板（如果使用视图引擎）
    ├── app.js               # 应用程序主文件
    └── package.json         # 项目配置文件
   ```






