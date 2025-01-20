const User = require("../../models/User");

async function getUser(req, res, next) {
  const users = await User.find(); // 返回所有文档
  return res.json(users);
}

module.exports = {
  getUser,
};
