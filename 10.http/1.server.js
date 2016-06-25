//创建http服务 ，核心模块
var http = require('http');
var fs = require('fs');
//创建一个服务，
//request请求 response响应 流
http.createServer(function (request,response) {
    //响应头要在最上面设置
    //获得请求路径
    console.log(request.url);
    //获得请求方法
    console.log(request.method);
    //获得请求头
    console.log(request.headers);



if(request.url=='/hello.html'){
    response.setHeader('Content-type','text/html;charset=utf8');
    fs.createReadStream('./hello.html').pipe(response);
}else if(request.url=='/favicon.ico'){
    //告诉浏览器没有找到  设置状态为404
    response.statusCode = '404';
    response.end('');
}else if(request.url=='/style.css'){
    response.setHeader('Content-type','text/css;charset=utf8');
    fs.createReadStream('./style.css').pipe(response);
}else if(request.url=='/index.js'){
    response.setHeader('Content-type','application/x-javascript;charset=utf8');
    fs.createReadStream('./index.js').pipe(response);
}
    
    
    


    //增加响应头，告诉浏览器端内容是什么类型的 content-type
    //response.write('你好');//向客户端写入内容
    //response.end('world');//向客户端 写入数据并且关闭


    /*fs.readFile('./hello.html', function (err,data) {
     response.end(data);
     })*/
}).listen(8080);
//监听8080端口