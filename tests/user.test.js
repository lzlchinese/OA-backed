// user.test.js
const { getUser } = require("../services/middlewares/user-middleware.js");
const User = require("../models/User");
const httpMocks = require("node-mocks-http");

jest.mock("../models/User"); // 模拟 User 模型

describe("getUser", () => {
  let req, res, next;

  beforeEach(() => {
    // 设置模拟的 req, res 和 next 对象
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
  });

  it("should return a list of users", async () => {
    // 模拟 User.find() 方法返回的数据
    const mockUsers = [
      { name: "John", email: "john@example.com" },
      { name: "Jane", email: "jane@example.com" },
    ];
    User.find.mockResolvedValue(mockUsers); // 模拟返回的结果

    // 调用 getUser 函数
    await getUser(req, res, next);

    expect(res.statusCode).toBe(200); // 确认状态码
    expect(JSON.parse(res._getData())).toEqual(mockUsers); // 确认返回的数据
  });
});
