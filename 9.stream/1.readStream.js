var fs = require('fs');
//创建一个可读流 将我们的文件变成流
var rs = fs.createReadStream('./2.txt',{
    flags:'r',//read 我们打开文件以后 要做什么操作 默认就是r
    encoding:null,//读出来的编码格式默认是null  buffer，如果指定编码 读到的就变成字符串
    start:3,
    end:6,//从索引3开始读 读到索引6位置 既包前又包后
    highWaterMark:1 //最高水位线
}); //默认highWaterMark是64k 每次读到缓存里的大小，最小为1
//设置utf8的编码格式
rs.setEncoding('utf8');
//如果只创建流没有任何效果
//告诉我们准备好了，开始读
//监听可读流的数据,默认读到的是buffer
//根据highWaterMark大小读取多次触发data事件
//如果设置的highWaterMark一次能执行完 就执行一次
rs.on('data', function (data) {
    console.log(data);
});
//当文件读取完后触发
rs.on('end', function () {
    console.log('读完了');
});
//都为异步操作
rs.on('error', function (err) {
    //当出错的时候触发error事件
    console.log('error',err);
})

//当你监听了data事件后，不停的rs.emit('data') 64k