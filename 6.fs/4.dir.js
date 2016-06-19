var fs  = require('fs');
//同步方法
//我们创建目录的时候要保证上级目录要存在，如果不存在无法创建
/*
fs.mkdirSync('a/b/c/d');
*/

mkdirs('a/b/c');
function mkdirs(path){
    //思路 1.要将我们的路径分割 先创建a ，在创建a/b a/b/c
    var arr=path.split('/');
    for(var i = 0; i<arr.length;i++){
        //每次截取一个路径[a] [a,b] [a,b,c]
        var cur = arr.slice(0,i+1);
        console.log(fs.existsSync(cur.join('/')));
        if(fs.existsSync(cur.join('/'))){
           continue;
        }
        fs.mkdirSync(cur.join('/'));
    }
};




//如果文件已经存在就不再创建 (true/false)
/*
var flag = fs.existsSync('./a');
console.log(flag);*/




//写一个异步的创建文件夹的方式