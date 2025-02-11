const UserMiddleWare = require("./middlewares/process-middleware");

const getProcess = [UserMiddleWare.getProcess];
const saveProcess = [UserMiddleWare.saveProcess];

module.exports = {
  getProcess,
  saveProcess,
};
