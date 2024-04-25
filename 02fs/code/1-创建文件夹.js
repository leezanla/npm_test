const fs = require("fs");
// 创建文件夹
fs.mkdir("./html", err => {
    if (err) {
        console.log("创建目录失败");
        return;
    }
    console.log("创建目录成功");
});

// 递归创建文件夹
fs.mkdir("./a/b/c", {recursive: true}, err => {
    if (err) {
        console.log("创建目录失败");
        return;
    }
    console.log("创建目录成功");
});

// 读取文件夹
fs.readdir("../", (err, files) => {
    if (err) {
        console.log("读取文件夹失败");
        return;
    }
    console.log(files);
    files.forEach((item) => {
        if (item.endsWith(".txt")) {
            console.log(item);
        }
    })
});
// 删除文件夹
fs.rmdir("./html", err => {
    if (err) {
        console.log("删除失败");
        return;
    }
    console.log("删除成功");
});
// 递归删除文件夹
fs.rmdir("./a", {recursive: true}, err => {
    if (err) {
        console.log("删除失败");
        return;
    }
    console.log("删除成功");
});