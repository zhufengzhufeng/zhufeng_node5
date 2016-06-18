title: K. 流stream
speaker: 珠峰培训
url: https://github.com/zhufengpeixun
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: blue
usemathjax: yes

[slide]
#Node.js中的流

[slide]
##fs模块读写方法
---
用途 | 异步 | 同步
:-------|:------:|-------
将文件作为**整体**读入缓存区 | readFile | readFileSync
将数据作为**整体**写入文件 | writeFile | writeFileSync

[slide]
##流的概念
- 流是一组**有序**的，有**起点**和**终点**的**字节数据传输**手段 {:&.moveIn}
- 不关心文件的整体内容，只关注是否从文件中**读**到了数据，以及读到数据之后的**处理**
- 流是一个**抽象接口**，被 Node 中的很多对象所实现。比如对一个 HTTP 服务器的请求对象request是一个流。

[slide]
##stream.Readable可读流
<small>使用实现了stream.Readable接口的对象来将对象数据读取为流数据,在您表明您`未准备好`接收之前，Readable 流并不会开始发射数据。</small>

[slide]
##ReadStream文件可读流
----
```
    fs.createReadStream(path,[options]);
```
- path 读取的**文件路径** {:&.moveIn}
- options
    - flags 对文件采取何种操作,默认为 'r'
    - encoding 指定**编码**，默认为null
    - start 用整数表示文件**开始**读取的字节数的索引位置
    - end  用整数表示文件**结束**读取的字节数的索引位置(*包括end位置*)
    - highWaterMark  最高水位线，停止从底层资源读取前内部缓冲区最多能存放的字节数。缺省为 64kb

[slide]
##可读流触发的**事件**
----
事件 | 用途
:-------|:------
data | 绑定一个`data`事件监听器到会将流切换到**流动模式**，数据会被尽可能快的读出
end | 该事件会在**读完**数据后被触发
error | 当数据接收时发生**错误**时触发


[slide]
##可读流的方法
----
 方法 | 描述
:-------|:------
setEncoding | 指定**编码**
pause | 通知对象**停止**触发data事件
resume | 通知对象**恢复**触发data事件


[slide]
##Writable可写流
使用各种实现stream.Writable接口的对象来将流数据**写入**到对象中

[slide]
##可写流的方法
----
 方法 | 描述
:-------|:------
write | 写入数据
end | **结束写入**数据时触发,调用后不能再写入

[slide]
##WriteStream
在fs模块中使用`createWriteStream`方法创建一个将流数据写入文件中的`WriteStream`对象
```
   fs.createWriteStream(path,[options]);
```
- path 读取的文件路径 {:&.moveIn}
- options
    - flags 对文件采取何种**操作**,默认为 'w'
    - encoding 指定**编码**，默认为null
    - highWaterMark  最高水位线，write()开始返回 false 的**缓冲大小**。缺省为 16kb
    
[slide]
##write方法
```
 writable.write(chunk,[encoding],[callback]);
```
- 参数 {:&.moveIn}
    - chunk  要**写入**的数据，Buffer或字符串对象，必须指定
    - encoding 写入**编码**，chunk为字符串时有用，可选
    - callback 写入成功后的**回调**
- 返回值为布尔值，系统缓存区定满时为false,未满时为true

[slide]
##end方法
在写入文件时，当不再需要写入数据时可调用该方法关闭文件。
迫使系统缓存区的数据立即写入文件中。
```
 writable.end(chunk,[encoding],[callback]);
```

[slide]
##缓存区清空后会触发drain事件
```
var desc = fs.createWriteStream('./anotherMsg.txt', {
    flags: 'w',
    encoding: 'utf8',
    highWaterMark: 5
});
var i = 10;

function write() {
    var flag = true;
    while (flag && i>0) {
        flag = desc.write('' + i--);
    } 
}

desc.on('drain', function () {
    write();
});
write();
```

[slide]
##pipe
流，尤其是 pipe() 方法的初衷，是将数据的**滞留量**限制到一个可接受的水平，以使得不同速度的来源和目标不会**淹没**可用内存。

用法
```
    readStream.pipe(writeStream,[options]);
    var from = fs.createReadStream('./test3.txt');
    var to = fs.createWriteStream('./test4.txt');
    from.pipe(to);
    from.on('end',function(){
        to.end('good bye');
    })
```

原理分析
```    
    var from = fs.createReadStream('./1.txt');
    var to = fs.createWriteStream('./2.txt');
    from.on('data',function(data){
        console.log(data);
        var flag = to.write(data);
        if(!flag){
            from.pause();
        }
    });
    to.on('drain',function(){
        from.resume();
    });
    from.on('end',function(){
        to.end();
    });
```












