//创建http服务 ，核心模块
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var querystring = require('querystring');
//第三方模块
var mime = require('mime');
http.createServer(function (request,response) {
 var urlObj  = url.parse(request.url,true);
    var pathname = urlObj.pathname;
if(pathname=='/'){
    response.setHeader('Content-type','text/html;charset=utf8');
    fs.createReadStream('./reg.html').pipe(response);
}else if(pathname=='/favicon.ico'){
    response.statusCode = '404';
    response.end('');
}else if(pathname=='/reg'){
    //像客户端返回最新的时间
    //post请求 后台在哪里接受？
    var result = '';
    request.on('data', function (data) {
        result+=data;
    });
    request.on('end', function () {
        //接收到了客户端的信息，将客户端的信息又再次返回
        //后台会处理成json
        response.end(JSON.stringify(querystring.parse(result)));
    });
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
