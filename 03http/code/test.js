const http = require("http");
const server = http.createServer((req, res) => {
    let url = new URL(req.url, "http://localhost:9000");
    res.setHeader("content-type", "text/html;charset=utf-8")
    if (url.pathname === "/login" && req.method === "GET") {
        res.end("登录页面")
    } else if (url.pathname === "/register" && req.method === "GET") {
        res.end("注册页面")
    } else {
        res.end("4xxx")
    }
});

server.listen(9000, () => {
    console.log("服务启动中");
});