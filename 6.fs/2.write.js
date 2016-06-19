//写方法
//writeFile
//writeFileSync
var fs = require('fs');
//读是直接读到内容 写是要有写的数据
//如果要写入的文件不存在会创建这个文件
//如果默认不写options  那写入的文件就是utf8格式的
//没有返回值
fs.writeFileSync('./write.txt',new Buffer("珠峰"));

var read = fs.readFileSync('./name.txt');
//我们写入文件的时候会先清空 在写入
//a append追加
fs.writeFileSync('./name1.txt',read,{flag:'a'});
//fs.appendFileSync(); 等同于 {flag:'a'}
