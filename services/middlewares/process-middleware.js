const Process = require("../../models/Process");

// 获取所有process的信息
async function getProcess(req, res, next) {
  let process = null;
  // 有点问题，需要修改
  if (req.query?.processStatus) {
    process = await Process.find(req.query);
  } else {
    process = await Process.find();
  }
  return res.json(process);
}

// 新建流程
async function createProcess(req, res, next) {
  if (
    !req.body.processName ||
    !req.body.createPerson ||
    !req.body.processType
  ) {
    return res.status(400).send({
      message: "流程数据不正确",
    });
  }
  if (!req.body.createTime) {
    req.body.createTime = new Date();
  }
  if (!req.body.modifitionTime) {
    req.body.modifitionTime = new Date();
  }
  // if (req.body.processType === "1-1") {
  //   TODO
  // } else {
  //   return res.status(400).send({
  //     message: "流程类型不正确",
  //   });
  // }
  new Process(req.body)
    .save()
    .then((process) => {
      return res.status(201).send({
        message: "流程创建成功",
      });
    })
    .catch((err) => {
      console.log("保存数据时出错:", err);
      return res.status(400).send({
        message: "保存数据失败",
      });
    });
}

// 批准流程
async function approveProcess(req, res, next) {
  req.body.modifitionTime = new Date();
  // if (req.body.approve != 1) {
  //   req.body
  // }
  Process.findByIdAndUpdate(req.body.id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "找不到数据",
        });
      } else {
        return res.status(201).send({
          message: "流程创建成功",
        });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        message: "流程创建失败",
        error: err,
      });
    });
}

// 修改流程
async function updateProcess(req, res, next) {}

// 删除流程
async function deleteProcess(req, res, next) {}

module.exports = {
  getProcess,
  createProcess,
  approveProcess,
  updateProcess,
  deleteProcess,
};
