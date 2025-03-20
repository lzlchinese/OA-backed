var express = require("express");
var router = express.Router();
const UseService = require("../services/user-service.js");

router.get("/", UseService.getUser);
router.post("/create", UseService.createUser);

module.exports = router;
