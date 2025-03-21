const SalaryMiddleWare = require("./middlewares/salary-middleware");

const getSalary = [SalaryMiddleWare.getSalary];
const createSalary = [SalaryMiddleWare.createSalary];

module.exports = {
  getSalary,
  createSalary,
};
