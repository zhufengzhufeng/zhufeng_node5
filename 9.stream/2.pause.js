var fs = require('fs');
//如果文件不存在 会创建文件
var ws = fs.createWriteStream('./2.txt',{
    flags:'w',//向文件内写入 //w每次都清空不会累加
    encoding:null,//写的时候 会自动转换为字符串
    //start:10//从哪个地方开始写
    highWaterMark:3 //默认值为16k
    //每次写入 看看嘴里满了没有 如果满了 返回false 如果没满返回true
});
var i = 0;
while (i<10){
    //如果写不进去了，那就放在外面，空闲的时候在把他写进去，容易丢失
    //write只能写buffer和字符串
    var flag = ws.write('好');
    console.log(flag);
    i++;
}

//var flag = ws.write('a');
//flag代表是否写入成功
//console.log(flag);


//像文件中写入内容
//ws.write('a'); //往文件里写内容
//ws.end('b'); //是最后写入 （停止再次写入） end和后文件就被关闭了
//ws.write('b');