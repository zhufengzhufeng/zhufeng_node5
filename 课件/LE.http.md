title: LE http客户端
speaker: 珠峰培训
url: https://github.com/zhufengpeixun
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: blue
usemathjax: yes

[slide]
#创建http客户端
request方法可以向其它网站请求数据
```
   var req = http.request(options,callback);//req表示http.ClientRequest对象，代表客户端请求
```
* options {:&.rollIn}
  * host **域名**或目标主机IP {:&.rollIn}
  * hostname **域名**或目标主机IP,优先级比host高
  * port **端口**号
  * method 请求**方法**
  * path 请求的**路径**,默认为 /
  * headers 客户端请求**头对象**
  * auth **认证**信息 如 "username:password"

* callback = function(response){} 当**获取**到目标网站所返回的**响应流**时调用的回调函数
  * `response`是一个*http.IncomingMessage*对象,可以从中**读取**响应流数据 {:&.rollIn}

[slide]
#写入请求并发送请求
* write方法向目标服务器**发送**数据,write方法可以多次调用 {:&.rollIn}
    ```
      request.write(chunk,[encoding]);
    ```
        * chunk 要发送的**数据**,可以是Buffer或字符串 {:&.rollIn}
        * encoding **编码**,不指定时默认是utf8
* end方法用来**结束**本次请求
    ```
      request.end(chunk,[encoding]);
    ```

[slide]
#发送json
```
var http = require('http');
var options = {
    host:'localhost',
    port:8080,
    path:'/post',
    method:'POST',
    headers:{'Content-Type':'application/json'}
}

var req = http.request(options,function(res){
    console.log('状态码:'+res.statusCode);
    console.log("响应头:"+JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log('响应内容'+chunk);
    });
    res.on('end',function(){
        console.log('响应end');
    });
})
req.write('{"name":"zfpx","age":7}');
req.end();
```

