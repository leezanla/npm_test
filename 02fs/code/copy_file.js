const fs = require("fs");
fs.readFile("../../data/笑看风云.mp4", (err, data) => {
    if (err) {
        console.log("读取失败");
        return;
    }
    if (data !== null) {
        fs.writeFile("../../data/笑看风云2.mp4", data, err => {
            if (err) {
                console.log("写入失败");
                return;
            }
            console.log("写入成功");
        });
    }
});