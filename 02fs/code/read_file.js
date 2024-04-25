const fs = require("fs");

// 文件读取
// fs.readFile("./data.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("文件读取失败");
//         return;
//     }
//     console.log("文件读取成功,文件的内容是：");
//     console.log(data);
//     console.log(typeof data);
// });

// 同步读取
// data = fs.readFileSync("./data.txt", "utf8");
// console.log(data);

// 流式文件读取
const rs = fs.createReadStream("./data.txt", "utf-8")
rs.on("data", data => console.log(data))
rs.on("error", err => console.log(err))
rs.on("end", end => {
    console.log("文件读取成功");
    rs.close()
})