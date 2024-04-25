let fs = require("fs");
const timers = require("node:timers");
let rs = fs.createReadStream("./index.html", "utf-8");
// try {
//     rs.on("data", (data) => {
//         setTimeout(() => {
//             console.log(data);
//         }, 1000)
//     })
// }catch (e) {
//     console.log(e);
// }
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

fs.readFile("./index.html", "utf-8", (err, data) => {
    if (err) {
        console.log("读取文件错误");
        return;
    }
    let lines = data.split(/\r\n/);
    console.log(lines.length);

    lines.forEach((line) => {
        sleep(1000);
        console.log(line);
    })
});

