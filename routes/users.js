var express = require("express");
var router = express.Router();
const UserService = require("../services/user-service.js");

router.get("/", UserService.getUser);
router.post("/create", UserService.createUser);

module.exports = router;
