const http = require("http");
const fs = require("fs")
const path = require("node:path");
const server = http.createServer((req, res) => {
    res.end(
        fs.readFileSync(path.resolve(__dirname, "test.html"))
    )
});

server.listen(9000, () => {
    console.log("服务启动....");
});