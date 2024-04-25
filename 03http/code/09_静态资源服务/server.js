const http = require("http")
const server = http.createServer((req, res) => {
    let url = new URL(req.url, "http://" + req.headers.host)
    // console.log(req.headers);
    console.log(url);
    res.end("hello")
})
server.listen(9000, () => {
    console.log("服务启动");
})