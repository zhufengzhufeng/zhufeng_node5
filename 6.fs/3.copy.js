var fs = require('fs');
/*try {
    //try catch可以捕获同步异常
    fs.readFileSync('./name3.txt');
}catch (e){
    console.log(e.message);
}*/
//异步的方式 回调函数
function copy(source,target,callback){
    fs.readFile(source,function (error,data) {
        if(error)
            callback();
        fs.writeFile(target,data);
    });
}
copy('./age11.txt','./age1.txt', function () {
    console.log('错了');
});