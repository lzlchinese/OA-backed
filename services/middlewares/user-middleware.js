const User = require("../../models/User");

async function getUser(req, res, next) {
  let user = null;
  // 有点问题，需要修改
  if (req.query?.name) {
    user = await User.find(req.query);
  } else {
    user = await User.find();
  }
  return res.json(user);
}

// 新建个人信息
async function createUser(req, res, next) {
  new User(req.body)
    .save()
    .then((user) => {
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

module.exports = {
  getUser,
  createUser,
};
