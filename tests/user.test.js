// user.test.js
const { getUser } = require("../services/middlewares/user-middleware.js");
const httpMocks = require("node-mocks-http");

describe("getUser function", () => {
  it("should return status 200 and send a response", () => {
    // 创建模拟的请求和响应对象
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn(); // 模拟 next 函数

    // 调用 getUser 函数
    getUser(req, res, next);

    // 验证是否调用了 res.status(200) 和 res.send()
    expect(res.statusCode).toBe(200);
    expect(res._getData()).toBe("");
  });
});
