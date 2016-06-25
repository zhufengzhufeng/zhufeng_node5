var fs = require('fs');
function copy(source,target){
    //保证读和写速度是一致的
    //1.先读出来
    //2.写如果返回false ，就停止读取了，
    //3.让我们先写一会，写完后调用drain方法，
    //4.在里面恢复可读流
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    //第一次先读了 假如说读了64k
    rs.on('data', function (data) {
        //先判断一下能不能写进去
        var flag = ws.write(data); //每次能写16k
        if(!flag)
            rs.pause();
    });
    //当消化完了 你在给我64k我再吃
    ws.on('drain', function () {
        rs.resume();
    });
    rs.on('end', function () {
        ws.end(); //将缓存区的内容全部写入；
    });
}
copy('./1.txt','./2.txt');