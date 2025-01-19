// models/User.js
const mongoose = require('mongoose');

// 定义用户模型
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

// 创建模型
// 模型名称：'User'，集合名称：'user'（手动指定）
const User = mongoose.model('User', userSchema, 'user');

module.exports = User;