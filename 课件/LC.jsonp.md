title: LC.jsonp
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##ajax预习课-jsonp
<small>珠峰培训</small>

[slide]
#同源策略
同源策略就是规定了javascript*可以操作*那些web内容的一个完整的安全限制。

[slide]
#什么是同源？
同源就是规定多个*web*资源的*url*中`scheme(协议)`、`hostname(域名或IP)`、`port(端口)`必须相同，只要有一项不同那么这个`web`资源就不是同源的。

[slide]
#什么是跨域？
当请求的资源的*URL*与**当前页面**的*URL*中的`scheme(协议)`、`hostname(域名或IP)`、`port(端口)`有一个不同的时候就算是跨域操作。

[slide]
#JSONP
* *script*元素可以作为一种*Ajax*传输协议
* 只需设置*script*元素的`src`属性并且插入到*DOM*中，浏览器就会发出一个*HTTP*请求到*src*属性所指向的*URL*。
* script不受*同源策略*的影响
* script元素会*自动下载*并**执行**下载的数据
* 使用这种script元素来进行*Ajax*数据的传输的技术就叫做*JSONP*,也就是`JSON－Padding`.
```
//服务器不可以返回这样的数据
["baidu","telnet","alibaba"]
//服务器会返回一个这样的响应
functionName(["baidu","telnet","alibaba"])
```
> 其中的*functionName*必须是在*window*下可以访问的名称

[slide]
#示例
```
function search(){
  var script = document.createElement('script');
  var keyword = document.getElementById('keyword').value;
  script.src = 'http://suggestion.baidu.com/su?wd=a&cb=show';
  script.src = 'http://localhost/search?keyword='+keyword+'&callback=show';
  document.body.appendChild(script);
}
```





