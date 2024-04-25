const http = require("http")
const server = http.createServer((req, res) => {
    // 实例化一个url
    let url = new URL(req.url, "http://localhost:9000");
    console.log(url);
    // 输出路径
    console.log(url.pathname);
    // 输出keyword查询字符串
    console.log(url.searchParams.get("username"));
    res.end("url new ")
})

server.listen(9000, () => {
    console.log("服务启动中");
})