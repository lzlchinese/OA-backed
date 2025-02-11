const Process = require("../../models/Process");

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

async function saveProcess(req, res, next) {
  if (
    !req.body.processName ||
    !req.body.createPerson ||
    !req.body.processType
  ) {
    return res.status(400).send({
      message: "数据不完整",
    });
  }
  if (!req.body.createTime) {
    req.body.createTime = new Date();
  }
  if (!req.body.modifitionTime) {
    req.body.modifitionTime = new Date();
  }
  // if (req.body.processType === "1-1") {
  //   // TODO
  // } else {
  //   return res.status(400).send({
  //     message: "流程类型不正确",
  //   });
  // }
  new Process(req.body)
    .save()
    .then((process) => {
      console.log("数据已保存:", process);
    })
    .catch((err) => {
      console.log("保存数据时出错:", err);
    });
  return res.status(201).send({
    message: "流程创建成功",
  });
}

module.exports = {
  getProcess,
  saveProcess,
};
