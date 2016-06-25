//创建http服务 ，核心模块
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = {
    '.html':'text/html',
    '.js':'application/x-javascript',
    '.css':'text/css',
    '.jpg':'image/jpeg'
}
//创建一个服务，
//request请求 response响应 流
http.createServer(function (request,response) {
 var urlObj  = url.parse(request.url,true);
    var pathname = urlObj.pathname;
if(pathname=='/'){
    response.setHeader('Content-type','text/html;charset=utf8');
    fs.createReadStream('./hello.html').pipe(response);
}else if(pathname=='/favicon.ico'){
    response.statusCode = '404';
    response.end('');
}else{
    response.setHeader('Content-type',mime[path.extname(pathname)]+';charset=utf8');
    fs.createReadStream('.'+pathname).pipe(response);
}
}).listen(8080);
