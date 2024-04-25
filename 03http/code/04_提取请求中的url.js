// 导入http模块
const http = require("http")
// 导入url模块
const url = require("url")
const server = http.createServer((req, res) => {
    let result = url.parse(req.url, true)
    console.log(result);
    console.log(result.pathname);
    console.log(result.query.username);
    res.end("hello")
})
server.listen(9000, () => {
    console.log("服务已经启动");
})