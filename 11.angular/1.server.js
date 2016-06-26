var http  = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
http.createServer(function (req,res) {
   var urlObj =  url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        res.setHeader('Content-type','text/html;charset=utf8');
        fs.createReadStream('./10.cart.html').pipe(res);
    }else if(pathname=='/compute'){
        var data = fs.readFileSync('./compute.json','utf8');
        res.end(data);
    }else if(pathname=='/post'){
        //post方式进行提交 内容在请求体里
        var result = '';
        req.on('data', function (data) {
            console.log(data.toString());
            result+=data
        });
        req.on('end', function () {
            res.end(result);
        });
    }else if(pathname =='/jsonp'){
        //http://localhost:3000/jsonp?callback=cb
        //cb({name:1})
        console.log(urlObj.query.callback+"({name:1})")
        res.end(urlObj.query.callback+"({name:1})")

    }else{
        if(fs.existsSync('.'+pathname)){
            res.setHeader('Content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode = '404';
            res.end();
        }
    }
}).listen(3000);
