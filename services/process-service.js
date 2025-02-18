const UserMiddleWare = require("./middlewares/process-middleware");

const getProcess = [UserMiddleWare.getProcess];
const createProcess = [UserMiddleWare.createProcess];
const approveProcess = [UserMiddleWare.approveProcess];
const updateProcess = [UserMiddleWare.updateProcess];
const deleteProcess = [UserMiddleWare.deleteProcess];

module.exports = {
  getProcess,
  createProcess,
  approveProcess,
  updateProcess,
  deleteProcess,
};
