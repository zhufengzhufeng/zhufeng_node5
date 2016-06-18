//a代表的就是exports对象
var a = require('./4.module1.js');
console.log(require);
//我们的缓存在 require.cache里
//通过绝对路径获取的
//获取绝对路径的方法
var src = require.resolve('./4.module1.js');
//src就代表当前指定的文件的绝对路径
//console.log(src);
delete require.cache[src];
var b = require('./4.module1.js');
console.log(b); //当前直接引用的就是空对象
//只要删除缓存就可以加载多次
//缓存机制将我们的模块缓存下来了

//一个文件require多次只执行一次
