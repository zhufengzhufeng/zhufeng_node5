var http = require('http');
var url = require('url');
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    res.setHeader('Content-type','text/html;charset=utf8')
    if(pathname == '/baozi'){
        res.end('包子'+urlObj.query.num+'个');
    }else{
        res.end('404');
    }
}).listen(8888);
