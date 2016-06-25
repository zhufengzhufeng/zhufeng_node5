//创建xhr对象
function getClock(){
    var xhr = new XMLHttpRequest();
//open  true是异步 是否异步
    xhr.open('GET','/clock',true);
//监听readystatechange
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4&&/2\d{2}/.test(xhr.status)){
            //如果类型不是json的 response = responseText
            app.innerHTML = xhr.response;
        }
    };
//send
    xhr.send();
}
setInterval(function () {
    getClock();
},1000);