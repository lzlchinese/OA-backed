const Salary = require("../../models/Salary");

async function getSalary(req, res, next) {
  try {
    const { page = 1, limit = 10, name } = req.query; // 获取分页参数和查询条件
    const skip = (page - 1) * limit;

    // 构建查询条件
    const query = {};
    if (name) {
      query.name = { $regex: name, $options: "i" }; // 模糊搜索
    }

    // 查询总条数
    const total = await Salary.countDocuments(query);

    // 查询当前页的数据
    const salary = await Salary.find(query).skip(skip).limit(Number(limit));

    // 计算总页数
    const totalPages = Math.ceil(total / limit);

    // 返回分页结果
    res.json({
      success: true,
      data: {
        salary,
        total,
        totalPages,
        currentPage: Number(page),
        limit: Number(limit),
      },
    });
  } catch (err) {
    console.error("分页查询失败:", err);
    res.status(500).json({ success: false, message: "分页查询失败" });
  }
}

// 新建个人税收
async function createSalary(req, res, next) {
  Salary.insertMany(req.body)
    .then((salary) => {
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
  getSalary,
  createSalary,
};
