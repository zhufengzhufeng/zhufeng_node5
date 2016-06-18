title: LB.ajax
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##ajax
<small>珠峰培训</small>

[slide]
#第一步 **创建**`ajax`对象
```
 var XHR = new XMLHttpRequest();
```

[slide]
#第二步 **打开**请求
```
xhr.open(method, url, async, user, password);
```
##参数解析
-----
|参数名|参数含义|
|:----|:----|
|method|*http方法*，例如：*POST*、*GET*、*PUT*等。大小写不敏感。|
|url|请求的`URL`地址，可以为绝对地址也可以为相对地址|
|async|布尔型，指定此请求*是否为异步*方式，默认为true。如果为真，当状态改变时会调用onreadystatechange属性指定的回调函数。|
|user|如果服务器需要验证，此处指定*用户名*, 默认是undefined|
|password|验证信息中的*密码*部分, 默认是undefined|

[slide]
#第三步 指定接收响应的*回调函数*
* 当*XMLHTTPRequest*对象的**readyState**属性改变时调用回调函数
```
oXMLHttpRequest.onreadystatechange = function(){};
```
[slide]
*XHR*对象状态
----
|属性|属性含义|
|:----|:----|
|readyState|oXMLHttpRequest对象的状态|

[slide]
#*readyState*状态的**值**
----
|属性|属性含义|
|:----|:----|
|0 (未初始化) |对象已建立，但是尚未初始化（尚未调用`open`方法）|
|1 (初始化) |对象已建立，尚未调用`send`方法|
|2 (发送数据) |send方法已调用，但是当前的状态及`http`头未知|
|3 (数据传送中)|已接收部分数据，因为响应及*http*头不全，这时通过*responseBody*和*responseText*获取部分数据会出现错误，|
|4 (完成) |数据接收完毕,此时可以通过通过*responseBody*和*responseText*获取完整的回应数据|

[slide]
#服务器响应
----
|属性|属性含义|
|:----|:----|
|status|http的响应*状态码*|
|statusText|表示http的响应状态码*描述符*|
|responseText|表示*响应主体*|

[slide]
#发送请求
* *send*方法会把参数放到**请求体**里
* 所有*get*系不能传**参数**,而*post*可能需要
* 当使用同步的时候 *send*方法后都会阻塞,一直等到服务器响应,所以*send*方法要放在*最后*

```
oXMLHttpRequest.send(varBody);
```
send方法重载参数
----
|属性|属性含义|
|:----|:----|
| |空|
|DOMString|字符串|
|FormData|格式化表单数据|

[slide]
#*form*标签的*enctype*属性
-----
|值|描述|
|:----|:----|
|application/x-www-form-urlencoded|在发送前*编码*所有字符（默认）|
|multipart/form-data|*不对字符编码*,在使用包含**文件**上传控件的表单时，必须使用该值。|
|text/plain|空格转换为 "+" 加号，但不对特殊字符编码。|

[slide]
#xhr对象的**方法**
-----
|方法|描述|
|:----|:----|
|setRequestHeader(key,value)|设置*请求头*|
|getAllResponseHeaders|获取所有的*响应头*|
|getResponseHeader(key)|获取*指定*的响应头|

[slide]
#xhr对象的**属性**
-----
|属性名|描述|
|:----|:----|
|onreadystatechange|一个当readyState属性改变时会调用的*回调函数*对象|
|response|*响应内容*，响应实体类型由**responseType**指定|
|responseType| 修改响应*类型*|
|responseText|响应为*文本*|
|status|响应*状态码*|
|statusText|响应状态码*描述信息*|

[slide]
#responseType响应类型
`XMLHttpRequest.responseType`设置该值能够改变响应类型,设置后会把`XMLHttpRequest.response`转化为相应的类型。
-----
|属性名|描述|
|:----|:----|
|"" (空字符串)|字符串(默认值),设置后response和responseText都会是一个*字符串*|
|json|设置后response和responseXML都会是一个*JSON*对象|
|text|字符串,设置后response和responseText都会是一个*字符串*|


[slide]
#get系ajax
```
ActiveXObject("Msxml2.XMLHTTP") Msxml3.XMLHTTP Microsoft.XMLHTTP
var x = XHR();
        x.open('get', 'student.json',false,'username','password');
        x.onreadystatechange = function () {
            if (x.readyState === 4 && /^2\d{2}$/.test(x.status)) {
                console.log(x.getAllResponseHeaders());
                console.log(x.getResponseHeader('server'));
                console.log(x.responseText,x.status,x.statusText);
            }
        };
        x.send();
```


[slide]
#post系ajax
```
var xhr = XHR();
xhr.open('post', '/ajax',false);
xhr.responseType = 'json';
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xhr.send('name=zfpx&age=6');
```

[slide]
#jquery中的ajax
```javascript
window.onload = function(){
        $.ajax({
            method: 'get',//请求的方法
            url: '/ajax',//请求的url
            data: {name:"zfpx"},//发送的数据
            processData: true,//是否处理数据,是否把对象转成查询字符串
            dataType: 'json',//返回的数据类型
            cache: false,//是否缓存
            async: true,//是否异步
            username: 'zfpx',//用户名
            password: '123456',//密码
            timeout: 0,//超时毫秒数
            headers: {name:'hotzf'},//自定义头
            context: document.querySelector('#content'),//上下文 success error执行时中的this指向谁
        }).done(function (result) {//成功处理
            this.innerHTML = result;
        }).fail(function (err,headers) {//错误处理
            console.log('promise error',err,headers);
        });
    }
```




