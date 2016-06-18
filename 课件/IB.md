title: I.B 作业
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##递归创建文件夹
```
var path = require('path');
var fs = require('fs');
function makedirP(dir){
  var args = dir.split('\\');
  var pathname;
  for(var i=1;i<=args.length;i++){
    pathname = args.slice(0,i).join(path.sep);
    var exists = fs.existsSync(pathname);
    if(!exists){
        fs.mkdir(pathname);
    }
  }
}

makedirP(path.join('1','2','3','4'));
```


[slide]
##深度优先 先序遍历
* 目录在遍历时一般使用*深度优先*+*先序遍历*算法。  
* 深度优先，意味着到达一个节点后，首先接着*遍历子节点*而不是邻居节点。   
* 先序遍历，意味着*首次到达了某节点*就算遍历完成，而不是最后一次返回某节点才算数
```javascript
function tranverse(dir,callback){
  var files = fs.readdirSync(dir);
  files.forEach(function(file){
    var pathname = path.join(dir,file);
    callback(pathname);
    var stat = fs.statSync(pathname);
    if(stat.isDirectory){
        tranverse(pathname,callback);
    }
  });
}
```