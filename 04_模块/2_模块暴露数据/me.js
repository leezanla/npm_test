// 声明一个函数
function tiemo() {
    console.log("tiemo");
}

function niejiao() {
    console.log("niejiao");
}

// 暴露模块
// module.exports = {
//     tiemo,
//     niejiao
// }

// 第二种方式暴露数据
// exports.niejiao = niejiao;
// exports.tiemo = tiemo;

// module.exports === exports 为true，他们返回的都是一个对象{}
console.log(module.exports === exports);

// 还需要注意的是，require返回的值是module.exports中的值，而不是exports里面的值
/**
 * 而exports.tiemo可以返回对象，原因就是exports=module.exports={}
 * exports.tiemo就相当于往对象里面添加值了 export.tiemo={tiemo}
 */





