//可以通过数组的形式定义buffer buffer是16进制的形式
var buffer = new Buffer([16,17,18]);
console.log(buffer);
//通过字符串的形式 node不支持gbk
var buffer = new Buffer('珠峰','utf8');
console.log(buffer);
//通过buffer的长度来创建
var buffer = new Buffer(6);
//随机分配内存
//手都初始化，擦干净桌子
buffer.fill(0);
console.log(buffer);
var buffer = new Buffer(6);
//string, offset, length, encoding
//string要写入的内容
//offset偏移量
//写的长度
//encoding编码
buffer.write('珠',0,3,'utf8');
buffer.write('峰',3,3,'utf8'); //包前不包后slice
//将buffer转换成字符串
console.log(buffer.toString());
//将字符串变成buffer类型
var buffer = new Buffer("珠峰");
//将buffer转换成字符串类型 start end 是截取的buffer的长度
console.log(buffer.toString('utf8',3,6));

//buffer和字符串的区别
var buffer = new Buffer("珠峰");
console.log(buffer.length);
//数组区别 slice方法
var arr = [1,2,3];
var newArr = arr.slice(0,1);//slice方法是返回新的数组
newArr[0] = 100;
console.log(arr);

var buffer = new Buffer('珠');
console.log(buffer);
var newBuffer = buffer.slice(0,1);
newBuffer[0]=100;
console.log(buffer); //64  16*6+4
//改变截取后的buffer会对原buffer有影响

//buffer中需要注意的 255
var buffer = new Buffer([260]);
//如果传入不和发的转换成0
console.log(buffer);
//如果大于255 会对256取模
var buffer = new Buffer([-1]);
console.log(buffer); //256+(-)

//buffer中的copy方法 把小buffer，copy到大buffer里
var buff = new Buffer(12);
//将buf1和buff2拷贝到buff上
var buf1 = new Buffer('珠峰');
//targetBuffer,目标
//buffer targetStart,目标开始
//sourceStart,源的开始
//sourceEnd 源的结束
//后面的两个参数如果默认不写 会默认的从头读到尾
var buf2 = new Buffer('培训');
//默认copy到0位置
buf1.copy(buff);
buf2.copy(buff,6);
console.log(buff.toString());

//Buffer.concat
var buffer1 = new Buffer([1,2,3]);
var buffer2 = new Buffer([4,5,6]);
//param1 : list 要拼接的buffer 参数2 totalLength
Buffer.concat([buffer1,buffer2],6);
console.log(Buffer.concat([buffer1,buffer2],1000));

//写一个Buffer.myconcat
Buffer.myConcat = function (list,len) {
    //注意len是否传递 如果大了就把多余的去掉，如果小了就拷贝不进去
    //思路 创建一个大buffer 用copy方法将buffer拷贝进去，多余的删掉，返回一个新的buffer
    if(list.length==1){
        return list[0];
    }
    if(typeof len=='undefined'){
        len = 0;
        //把所有的长度算出来，计算出总长度
        list.forEach(function (item) {
            len += item.length;
        });
    }
    //通过计算出的长度创建一个新的buffer
    //如果传递的length 过大
    var buffer = new Buffer(len);
    var index = 0;
    list.forEach(function (item) {
        item.copy(buffer,index);
        index += item.length;
    });
    //要将多余的截出来
    return buffer.slice(0,index);
};
console.log(Buffer.myConcat([buffer1,buffer2],4));

//解决截取不够乱码的问题
var StringDecoder  = require('string_decoder').StringDecoder;
var sd = new StringDecoder;
var buffer = new Buffer('珠峰');
console.log(sd.write(buffer.slice(0,4)));
console.log(sd.write(buffer.slice(4)));
//判断是不是buffer类型
console.log(Buffer.isBuffer(buffer));



