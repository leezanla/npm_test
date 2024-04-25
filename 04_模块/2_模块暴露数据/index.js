// 导入模块，不能省略./ 或者 ../
let me = require("./me.js")

// 可以省略.js
let m = require("./me")

// 导入json，也可以省略.json
let yinhun1 = require("./yinhun")
console.log(yinhun1); // 这个一个对象

// 如果有index.js也有index.json，在省略后缀的情况下，优先匹配js
(function (a, b) {
    console.log(a + b);
})(1, 2)
