////global上的属性 文件模块里的属性__file，__dirname
//setTimeout(function () {
//    console.log('setTimeout');
//},0);
//setImmediate(function () {
//    console.log('setImmediate');
//});
////setImmediate和setTimeout都是同一事件对列
////setImmediat给setTimeout一些运行的机会
//
//process.cwd(); //当前的工作目录可以修改
//process.chdir();
//__dirname//代码当前目录不可能更改的
process.nextTick(function () {
    console.log('nextTick1');
    process.nextTick(function () {
        console.log('nextTick2');
        setImmediate(function () {
            console.log('setImmediate2');
        })
    })
});
setImmediate(function () {
    console.log('setImmediate1');
});

