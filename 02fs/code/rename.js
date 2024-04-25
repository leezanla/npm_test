const fs = require("fs")
// 文件的重命名
fs.rename("./座右铭.txt", "./zuoyouming.txt", (err) => {
    if (err) {
        console.log("重命名失败");
        return;
    }
    console.log("重命名成功");
})
// 文件的移动
fs.rename("./zuoyouming.txt", "../zuoyouming.txt", err => {
    if (err) {
        console.log("移动失败");
        return;
    }
    console.log("移动成功");
})