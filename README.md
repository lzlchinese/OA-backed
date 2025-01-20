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

## 连接 mongodb

1. **安装 Mongoose**  
   在你的项目根目录下执行以下命令来安装 mongoose：

   ```bash
   npm install mongoose
   ```

2. **创建 MongoDB 连接**
   在app.js里面连接到 MongoDB 数据库

   ```javascript
   const mongoose = require("mongoose");
   mongoose
     .connect("mongodb://localhost:27017/mydatabase", {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
     .then(() => {
       console.log("MongoDB connected!");
     })
     .catch((err) => {
       console.log("MongoDB connection error:", err);
     });
   ```

3. **创建 Schema 和 Model**
   在根目录中创建models/xxx.js

   ```javascript
   const mongoose = require("mongoose");

   const xxSchema = new mongoose.Schema({
     name: String,
     age: Number,
     email: String,
   });

   const XXX = mongoose.model(模型名称, xxSchema, 集合名称);

   module.exports = XXX;
   ```

4. **使用model**

   ```javascript
   const xxx = require("../../models/xxx");

   xxx.find(); // 查询数据
   xxx.findOne({ email: String }); // 查询一个特定的用户
   xxx.findById(id); // 查询特定的id
   ...

   ```

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
         "test": "jest --coverage"
      }
   }
   ```

3. **配置 Jest**
   新建一个jest.config.js

   ```javascript
   module.exports = {
     testEnvironment: "node",
     collectCoverage: true,
     coverageDirectory: "coverage",
     coverageThreshold: {
       global: {
         branches: 80,
         functions: 80,
         lines: 80,
         statements: 80,
       },
     },
   };
   ```

4. **新建test文件**

   代码diy

5. **运行jest**
   ```bash
   npm run test
   ```

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
