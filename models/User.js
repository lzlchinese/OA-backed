// models/User.js
const mongoose = require("mongoose");

// 定义用户模型
const userSchema = new mongoose.Schema({
  name: String,
  sex: String,
  bathday: String,
  ethnicity: String,
  placeOfOrigin: String,
  livingPlace: String,
  phone: String,
  email: String,
  Officelocation: String,
  post: String,
  position: String,
  rank: String,
  leader: String,
  landline: String,
  Companyemail: String,
  officeArea: String,
  entryTime: String,
  qualification: String,
  Technical: String,
});

// 创建模型
// 模型名称：'User'，集合名称：'users'（手动指定）
const User = mongoose.model("Users", userSchema, "users");

module.exports = User;
