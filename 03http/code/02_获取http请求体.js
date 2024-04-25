// 导入http模块
const http = require("http");
// 创建一个服务对象
const serve = http.createServer((request, response) => {
    // 如果是中文，则会乱码，可以设置一下请求头
    response.setHeader("content-type", "text/html;charset=utf-8")
    let {url, method} = request
    console.log(url);
    console.log(method);
    console.log(request.headers);
    console.log(request.headers.host);
    response.end("你好"); // 设置响应体

});

// 监听端口，启动服务
serve.listen(9000, () => {
    console.log("服务已经启动");
})