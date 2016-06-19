var fs = require('fs');


var arr = fs.readdirSync('./e');
console.log(arr);//返回一个当前文件里儿子辈列表的数组
//判断读出来的arr 是文件还是文件夹
arr.forEach(function (item) {
    //读出的每一个状态
    var stat = fs.statSync('./e/'+item);
    //当前的这个文件是不是文件夹
    if( stat.isDirectory()){
        //如果是文件夹我们就把他删除掉
        fs.rmdirSync('./e/'+item);
    }
    if(stat.isFile()){
        //如果是文件我们就把文件删掉
        fs.unlinkSync('./e/'+item);
    }
    //console.log(stat);
});
//第一个作业 写一个异步的创建文件夹的方式
//第二个作业 写循环删除所有文件（异步的）