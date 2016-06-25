var fs = require('fs');
var rs = fs.createReadStream('./1.txt',{
    highWaterMark:2
});

rs.on('data', function (data) {
    console.log(data);
    //当监听数据后 执行pause方法，让可读流停止
    rs.pause();
});
setTimeout(function () {
    //恢复流
    rs.resume();
},3000);
rs.on('end', function (data) {
    console.log('end');
});


