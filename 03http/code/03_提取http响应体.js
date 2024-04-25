// 1、导入http模块
const http = require("http");
const server = http.createServer((req, res) => {
    // 声明一个变量
    let body = "";
    // 绑定data事件
    req.on("data", chunk => {
        body += chunk;
    });
    // 绑定end事件
    req.on("end", () => {
        console.log(body);
        // 响应
        res.end("Hello Http")
    })
});
server.listen(9000, () => {
    console.log("服务启动");
})