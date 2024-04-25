let  bf = Buffer.alloc(10);
// console.log(bf);

let bf2 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(bf2.toString());

let bf3 = Buffer.from("hello")
console.log(bf3);
// 修改第一位的数据（也就是h）
bf3[0] = 100
console.log(bf3.toString());