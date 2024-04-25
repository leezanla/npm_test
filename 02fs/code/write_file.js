/**
 * 需求，新建一个文件，命名为：座右铭.txt,写入：三人行，必有我师焉
 */
// 导入fs模块
const fs = require("fs");

// 异步写入文件
fs.writeFile("./座右铭.txt", "三人行，必有我师焉", err => {
    // 如果写入失败，err就是一个错误对象，如果写入成功，err为null
    if (err) {
        console.log("成入失败");
        return;
    }
    console.log("写入成功");
});
// 同步写入
fs.writeFileSync("./data.txt", "hello world");

// 异步文件的追加
fs.appendFile("./座右铭.txt", "孔子", err => {
    if (err) {
        console.log("追加失败");
        return;
    }
    console.log("追加成功");
});

// 同步追加文件
fs.appendFileSync("./data.txt", "apache");

// writeFile也可以实现追加的操作
fs.writeFile("./座右铭.txt", "\nlove love love", {flag: "a"}, err => {
    if (err) {
        console.log("追加失败");
        return;
    }
    console.log("追加成功");
});

