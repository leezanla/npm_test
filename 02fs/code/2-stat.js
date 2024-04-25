const fs = require("fs");
const path = require("path");

function traverseDirectory(currentPath) {
    fs.readdir(currentPath, (err, files) => {
        if (err) {
            console.log("读取文件失败");
            return;
        }
        if (files.length > 0) {
            files.forEach((item) => {
                const filePath = path.join(currentPath, item); // 拼接完整路径
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.log("获取状态失败");
                        return;
                    }
                    if (stats.isFile()) {
                        console.log(filePath);
                    }
                    if (stats.isDirectory()) {
                        traverseDirectory(filePath)
                    }
                });
            });
        }
    });
}
traverseDirectory("./")
console.log(__dirname);
console.log(__filename);