//创建http服务 ，核心模块
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
//第三方模块
var mime = require('mime');
http.createServer(function (request,response) {
    
    console.log(request.url);
    
    
    
    
    
    
    
 var urlObj  = url.parse(request.url,true);
    var pathname = urlObj.pathname;
if(pathname=='/'){
    response.setHeader('Content-type','text/html;charset=utf8');
    fs.createReadStream('./hello.html').pipe(response);
}else if(pathname=='/favicon.ico'){
    response.statusCode = '404';
    response.end('');
}else if(pathname=='/clock'){
    //像客户端返回最新的时间
    response.end(new Date().toLocaleString());
}else {
    var flag = fs.existsSync('./' + pathname);
    if (flag) {
        response.setHeader('Content-type', mime.lookup(pathname) + ';charset=utf8');
        fs.createReadStream('.' + pathname).pipe(response);
    } else {
        response.statusCode = '404';
        response.end()
    }
}
}).listen(8080);

//我访问一个路径 /baozi?num=10  服务器返回包子10个
