const http = require("http");
const server = http.createServer((req, res) => {
    // 设置响应状态码
    res.statusCode = 200;

    // 设置响应状态描述
    res.statusMessage = "hello world";

    // 设置响应头
    res.setHeader("server", "node.js");
    res.setHeader("test", [1, 2, 3]);

    // 设置响应体
    res.write("abc")
    res.write("123")


    res.end("hello");
});

server.listen(9000, () => {
    console.log("服务启动....");
});