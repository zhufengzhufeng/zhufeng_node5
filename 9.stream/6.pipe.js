var fs = require('fs');
//pipe方法 将可读流 导入到可写流里
function copy(source,target){
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
}
copy('./1.txt','./2.txt');