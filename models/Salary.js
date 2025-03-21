// models/Salary.js
const mongoose = require("mongoose");

// 定义用户模型
const salarySchema = new mongoose.Schema({
  year: String,
  month: String,
  times: Number,
  name: String,
  level: String,
  basicSalary: String,
  subsidy: String,
  overtimePay: String,
  extraBonuses: String,
  grossPay: String,
  tax: String,
  totalDeduction: String,
  netSalary: String,
});

// 创建模型
// 模型名称：'Salary'，集合名称：'salary'（手动指定）
const Salary = mongoose.model("Salary", salarySchema, "salary");

module.exports = Salary;
