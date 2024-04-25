/**
 * 流式写入
 *
 */
// 1、导入fs
const fs = require('fs');

// 2、创建写入流对象
const ws = fs.createWriteStream("./观书有感.txt")

// 3、write
ws.write("1\n")
ws.write("2\n")

// 4、关闭通道
ws.close()