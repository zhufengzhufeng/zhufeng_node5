var http = require('http');
//解析路径
var url = require('url');
//将form表单的查询串转换成对象
//将对象转换成查询字符串
var querystring = require('querystring');
//查看响应类型
var mime = require('mime');
http.createServer(function (req,res) {
    url.parse(req.url,true);
    //req,res流 fs.createStream('1.html').pipe(res)
    //ws.write() ws.end()

    //获取post提交的数据
    //因为request发送请求是在请求体里，要监听data事件才能获取数据
    //req.on('data',function(){})
    //req.on('end',function(){res.end()})

    //querystring()

    //true代表query解析成对象型
    /*
    req.url
    req.method
    req.headers
    */

    //ajax
    //ajax四部曲 onload = onreadstatechange 200&&4
    //xhr.response 响应如果设置了
    //xhr.reponseType='json' 通过xhr.response获取json格式
    //xhr.send();里面只能放字符串
    //res.end();只能放buffer&&字符串
}).listen(8888);