var util = require('util');
//核心模块内置的，不需要去安装
function A(){
    this.smile = 'smile'
}
A.prototype.eat = function () {
    console.log('吃');
};
function B(){

    this.name = 'hello';
}
//继承了私有方法
//B.prototype = new A();
//原型链继承
/*B.prototype.__proto__ = A.prototype;
 var b = new B();
 b.eat();
 console.log(b.smile);*/
//util.inherits();;
//B.prototype= A.prototype 共用原型链
/*
 B.prototype = Object.create(A.prototype);
 var b = new B();
 b.eat();
 console.log(b.smile);*/
//是原型链继承
util.inherits(B,A);
var b = new B();
b.eat();
console.log(b.smile);

var obj = {
    name:{
        name:'zfpx'
    },
    home:'回龙观'
};
Object.defineProperty(obj,'age',{
    enumerable:true,
    value:100,//当前age的属性值
    configurable:true, //看当前属性是否可以删除
    writable:true
});
//delete obj.age
obj.age = 200;
//showHidden, depth, colors
//showHidden 显示隐藏属性
//depth 输出对象的深度
console.log(util.inspect(obj,{showHidden:true,depth:0,colors:true}));
//console.dir();输出详细信息 util.inspect
//工具类上的方法
console.log(util.isArray([]));
console.log(util.isError(new Error()));
console.log(util.isDate(new Date()));
console.log(util.isRegExp(new RegExp('')));

//内置模块 文件模块  第三方模块
//如果不加./ 不是内置模块 就是第三方模块
//require('./');

//如果核心模块木有找到 就找我们node_modules文件
//var mime = require('mime');
//表示当前模块
//通过module.paths 找到为止找不到就要报错
console.log(module.paths);

//引用自己的包
//会默认先找index.js 再找index.json
//如果没找到
//再通过package.json去查找main字段找到对应指定的index
//如果还找不到 往上一级node_modules里找
require('jiang');
require('./person.js');
require('./util.js');

