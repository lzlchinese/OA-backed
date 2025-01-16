var express = require('express');
var router = express.Router();
const UseService = require('../services/user-service.js');

router.get('/', UseService.getUser);

module.exports = router;
