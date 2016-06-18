/*console.log(global.process);
// argv pid nextTick  stdout stdin kill
// argv参数 当我们在命令行里执行  前两个参数是固定的。后面参数就是运行时传递的
console.log(process.argv);
//pid:就是当前进程的id
//console.log(process.pid);
setTimeout(function () {
    //process.kill杀掉进程
    //process.kill(process.pid);
},5000);
//console.log();
process.stdout.write('hello');
//监听用户输入
process.stdin.on('data', function (data) {
    console.log(data.toString());
});
//当前事件列表的最底部
process.nextTick(function () {
    console.log('开开心心');
    process.nextTick(function () {
        console.log('吃肉');
        setImmediate(function () {
            console.log('再考试');
        });
    });
});
//下一张表的
setImmediate(function () {
    console.log('明天考试');
});*/
//cwd   current working directory
console.log(process.cwd());
process.chdir('../');
//当前文件夹
console.log(__dirname);
//这个目录是可以改变的
console.log(process.cwd());
//memoryUsage 内存的使用
var arr = [];
//判断内存是否泄露
for(;true;){
    arr.push({});
    console.log(process.memoryUsage());
};
