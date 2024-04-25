const fs = require("fs");
// 文件删除的第一种方式 unlink
fs.unlink("./data.txt", err => {
    if (err) {
        console.log("删除失败");
        return;
    }
    console.log("删除成功");
});

// 文件删除的第二种方式 rm
fs.rm("./data.txt", err => {
    if (err) {
        console.log("删除失败");
        return;
    }
    console.log("删除成功");
});