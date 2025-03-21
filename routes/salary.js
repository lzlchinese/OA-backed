var express = require("express");
var router = express.Router();
const SalaryService = require("../services/salary-service.js");

router.get("/", SalaryService.getSalary);
router.post("/create", SalaryService.createSalary);

module.exports = router;
