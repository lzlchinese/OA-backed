var express = require("express");
var router = express.Router();
const ProcessService = require("../services/process-service.js");

router.get("/", ProcessService.getProcess);
router.post("/", ProcessService.createProcess);
router.post("/approve", ProcessService.approveProcess);
router.post("/update", ProcessService.updateProcess);
router.delete("/delete", ProcessService.deleteProcess);

module.exports = router;
