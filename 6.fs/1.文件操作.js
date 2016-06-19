//所有的放法都是异步和同步的同时出现

/*
readFile 异步
readFileSync 同步
*/

var fs = require('fs');
//同步的方法是通过返回值读取数据
//如果能马上返回结果都是同步方法require同步
//第一个参数是读取的文件 第二个参数是utf8
//将我们的文件一直读到内存里，大文件我们不采用这种方式，使用流
/*var obj = {};
var name = fs.readFileSync('./name.txt',{encoding:'utf8',flag:'r'});
obj.name = name;
var age = fs.readFileSync('./age.txt',{encoding:'utf8',flag:'r'});
obj.age = age;
console.log(obj);*/


//异步方法： data我们读到的数据
//异步不知道顺序
var obj = {}
//可以用索引/通过对象的长度
fs.readFile('./name.txt','utf8', function (err,data) {
    obj.name = data;
    out();
});
fs.readFile('./age.txt','utf8', function (err,data) {
    obj.age = data;
    out();
});
function out(){
    //当对象的属性有两个的时候将对象输出出来
    if(Object.keys(obj).length==2){
        console.log(obj);
    }
}

//通过事件 promise


