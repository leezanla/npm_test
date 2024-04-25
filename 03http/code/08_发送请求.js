const http = require("http");
let op = {
    hostname: "http://dev.nodejs.cn/",
    port: 80,
    path: "/learn/making-http-requests-with-nodejs/",
    method: "GET"
};
http.request(op, res => {
    console.log(res.statusCode);
    res.on("data", data => {
        console.log(data);
    });
});
