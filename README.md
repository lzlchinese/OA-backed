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

## mongodb安装

官网网址下载 https://www.mongodb.com/try/download/community

安装教程参考 https://www.cnblogs.com/zhoulifeng/p/9429597.html

mongodb-compass可视化下载 https://www.mongodb.com/try/download/compass

## 适配 prettier

1. **安装 prettier**  
   首先，确保你的项目中安装了 Prettier。如果你还没有安装，可以通过以下命令进行安装：

   ```bash
   npm install --save-dev prettier
   ```

2. **在 package.json 中添加脚本**
   在 package.json 中添加以下脚本：

   ```javascript
   {
      "scripts": {
         "format": "prettier --write ."
      }
   }
   ```

3. **通过以下命令来格式化代码**

   ```bash
   npm run format
   ```

## 适配 jest

1. **安装 jest**  
   如果还没有安装 Jest，可以通过以下命令来安装：

   ```bash
   npm install --save-dev jest
   ```

2. **在 package.json 中添加脚本**
   在 package.json 中添加以下脚本：

   ```javascript
   {
      "scripts": {
         "test": "jest"
      }
   }
   ```

3. **配置 Jest**

   ```json
   {
     "jest": {
       "testEnvironment": "node",
       "collectCoverage": true,
       "coverageDirectory": "coverage"
     }
   }
   ```

4. **新建test文件**
   代码diy

## 适配 github action

新建.github/workflows/xxx.yml文件（文件夹必须正确）
开头如下

```yml
name: CI Pipeline

on:
  push: # 测试的时候才放开

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"

      - name: Install
        run: |
          npm i
```

之后想怎么做可自己diy，比如检验format，jest等
