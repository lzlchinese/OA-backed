const UserMiddleWare = require("./middlewares/user-middleware");

const getUser = [UserMiddleWare.getUser];
const createUser = [UserMiddleWare.createUser];

module.exports = {
  getUser,
  createUser,
};
