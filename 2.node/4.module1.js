var a = 1;
//导出一个模块
console.log(100);
function Dialog(){
    console.log('dialog');
}
//导出引用数据类型采用module.exports
module.exports = 'str';

//当页面执行的是传递进来的参数
/*(function (require,exports,module,__dirname,__filename){
        exports = modules.exports = {}
        //指向了一个新的地址和module.exports没有任何关系
        exports = function(){
        }
        //这里返回的还是空对象
        return module.exports
 }())*/

