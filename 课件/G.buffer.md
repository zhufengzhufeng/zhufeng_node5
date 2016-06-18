title: G.缓存区Buffer
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##什么是Buffer
- 缓冲区Buffer是暂时存放输入输出数据的一段**内存**。 {:&.moveIn}
- JS语言没有**二进制**数据类型，而在处理TCP和文件流的时候，必须要处理二进制数据。
- NodeJS提供了一个Buffer对象来提供对二进制数据的操作
- 是一个表示**固定**内存分配的全局对象，也就是说要放到缓存区中的字节数需要**提前确定**
- Buffer好比由一个**多位字节**元素组成的数组，可以有效的在javascript中表示二进制数据

[slide]
##什么是字节
* 字节(Byte)是计算机存储时的一种*计量*单位，一个字节等于*8位*二进制数 {:&.zoomIn}
* 一个位就代表一个0或1，每8个位（bit）组成一个字节（Byte）
* 字节是通过网络传输信息的单位
* 一个字节最大值十进制数是255
   <img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/bytes.jpg" class="img-responsive">
```
var sum =0;
for(var i=0;i<8;i++){
    sum += Math.pow(2,i);
}
```

[slide]
##定义Buffer
* new Buffer(size) {:&.moveIn}
* 数组创建 new Buffer(array);
* 字符串创建 new Buffer(str,[encoding]);

[slide]
##字符串和Buffer转换
* buffer转字符串 buffer.toString([encoding],[start],[end]) {:&.moveIn}
* 字符串转Buffer  new Buffer(str,[encoding]);

[slide]
## Buffer常用方法
* 复制Buffer sourceBuffer.copy(targetBuffer,targetstart,sourcestart,sourceend)
* 合并Buffer Buffer.concat([buf1,buf2],length)  {:&.moveIn}
* 判断是否是 Buffer.isBuffer
* 获取字节长度 Buffer.byteLength

[slide]
##进制转换
* 将任意进制字符串转换为十进制
  * parseInt("11", 2);   // 3   2进制转10进制
  * parseInt("77", 8);   // 63  8进制转10进制
  * parseInt("e7", 16);  //175  16进制转10进制
* 将10进制转换为其它进制字符串 Object.toString(n) n表示进制
  * (3).toString(2))   // "11" 十进制转2进制
  * (17).toString(16)  // "11" 十进制转16进制
  * (33).toString(32)  // "11" 十提制转32进制
