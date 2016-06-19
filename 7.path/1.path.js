var path = require('path');
//处理路径的 ..是上一级 会拼出一个路径出来
var arr = path.join('a','b','..','c');
console.log(path.join(__dirname,'c'));
//拼接出一个绝对路径出来
console.log(path.resolve('/'));
//1.默认是当前文件夹目录
//2.在当前解析出来的路径增加b路径
//3.不识别后边的/
//4.回到根目录
//基本名字 通过制定扩展名取出对应的文件名
console.log(path.basename('a.js','.js'));
console.log(path.extname('a.js')); //取出扩展名
console.log(path.delimiter);//环境变量分隔符 :
console.log(path.sep); //路径分隔符   C:\BaseData   /
//mkdir(a/b/c/d) fs.mkdir用了path.sep
console.log(path.normalize('a///b//../c//./a'));
//1.会把多个 / 转换成一个
//2.会把后的/保留
//3.不写实.