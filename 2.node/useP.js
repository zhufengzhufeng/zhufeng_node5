var Person = require('./person.js');
//他会根据文件的绝对路径进行缓存
//console.log(require);
//通过文件名解析出一个绝对路径
var src = require.resolve('./person.js');
//当前require的缓存
delete  require.cache[src];
var Person = require('./person.js');


//console.log(person);
/*
var p = new Person();
console.log(p);
console.log(module);*/
