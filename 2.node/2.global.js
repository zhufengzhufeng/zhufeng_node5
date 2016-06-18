a = 100;
//console.log(global.a);
//1.我们通过var创建的变量不是挂载global上的，如果没有var的就会挂载在global上
exports.name = a;
//console.log(this); //{} 我们默认输出的this是exports对象

console.log(global);


console.log('log');
console.error('error');
console.warn('warn');
console.info('info');
//计算时差
console.time('start');
for(var i = 0 ;i<100000;i++){

}
console.timeEnd('start');
console.time('end');
/*setTimeout(function () {
    //console.log(1000);
    //可以计算异步的时间
    //console.timeEnd('end');
},2000);*/
//全局下可以访问 当时不是global的属性
//当前文件所在的文件夹
console.log(__dirname);
//当前文件的名字
console.log(__filename);


setTimeout(function () {
    console.log('setTimeout');
},20);
setImmediate(function () {
    console.log('setImmediate');
});
//setImmediate可以容忍setTimeout
//都是下一事件环（服务员的第二张单子）




