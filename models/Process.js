// models/Process.js
const mongoose = require("mongoose");

// 定义用户模型
const processSchema = new mongoose.Schema({
  processName: String,
  // 1: 人事教育类
  // 1-1: 长驻申请
  processType: String,
  createPerson: String,
  createTime: Date,
  modifitionTime: Date,
  processData: Object,
});

// 创建模型
// 模型名称：'Process'，集合名称：'process'（手动指定）
const Process = mongoose.model("Process", processSchema, "process");

module.exports = Process;
