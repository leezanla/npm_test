let fs = require("fs");
let process = require("process")
let rs = fs.createReadStream("../../data/笑看风云.mp4");
let ws = fs.createWriteStream("../../data/笑看风云1.mp4");
// rs.on("data", chunk => {
//     ws.write(chunk)
// })
try {
    rs.on("data", chunk => {
        ws.write(chunk);
    });
    rs.on("error", err => {
        console.log("读取失败");
    });
    rs.on("end", end => {
        rs.close();
        ws.close();
        console.log("文件复制成功");
    });
} catch (err) {
    console.log(err);
} finally {
}