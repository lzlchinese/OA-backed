const UserMiddleWare = require("./middlewares/process-middleware");

const getProcess = [UserMiddleWare.getProcess];
const createProcess = [UserMiddleWare.createProcess];
const updateProcess = [UserMiddleWare.updateProcess];

module.exports = {
  getProcess,
  createProcess,
  updateProcess,
};
