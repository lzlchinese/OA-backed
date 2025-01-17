const UserMiddleWare = require("./middlewares/user-middleware");

const getUser = [UserMiddleWare.getUser];

module.exports = {
  getUser,
};
