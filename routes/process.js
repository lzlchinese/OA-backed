var express = require("express");
var router = express.Router();
const ProcessService = require("../services/process-service.js");

router.get("/", ProcessService.getProcess);
router.post("/", ProcessService.createProcess);
router.post("/update", ProcessService.updateProcess);

module.exports = router;
