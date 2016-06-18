title: LD.cross
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##ajax预习课-跨域
<small>珠峰培训</small>

[slide]
#跨域资源共享
* XHR2中浏览器选择允许发送合适的CORS(cross-origin resource sharing，跨域资源共享)来**跨域请求数据**。
* 在标准浏览器中依旧使用`XMLHttpRequest`对象

[slide]
#设置响应头
* 当浏览器使用跨域资源共享时，服务器都必须在响应头中设置`Access-Control-Allow-Origin`
```
response.writeHead(200,{"Access-Control-Allow-Origin":"*"})
```

* 其中＊代码允许任何源请求本服务器.
也可以改成固定的源。例如：{"Access-Control-Allow-Origin":"http://localhost:63342"} 
* 只允许URL为http://localhost:63342的请求源请求本服务器。 

[slide]
#withCredentials属性
* 默认情况下，在浏览器中使用`XMLHttpRequest`进行跨源请求不提供凭据(cookie等)。
* 通过将`XMLHttpRequest`的`withCredentials`属性设置为`true`，可以指定某个请求应该发送凭据。
* 如果服务器接收带凭据的请求，会用下面的HTTP头部来响应。

```
//服务器端返回此响应头
Access-Control-Allow-Credentials: true

//在客户端XMLHttpRequest的withCredentials设置为true
xhr.withCredentials=true;
```
> 警告：如果将XMLHttpRequest的withCredentials属性设置为true的时候，Access-Control-Allow-Origin这个响应头不可以设置为*。




