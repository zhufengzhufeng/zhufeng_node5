var fs = require('fs');
var ws = fs.createWriteStream('./2.txt',{
    highWaterMark:2
});
var i = 0;
/*while(true){
    var flag = ws.write('a'); //因为嘴只能装两块，当嘴里的装不下了就返回false  如果这个过程中嘴里装了100块肉，还剩200块肉 你吃这100块肉的时间很长  剩的200块肉就可能被别人吃了， 数据就丢失了， 嘴里只有2块肉吃的很快 它可以马上去碗里找，就不会丢失数据，我们尽量保证 吃多少喂多少
    console.log(flag);
}*/

var i = 0;
function write(){
    var flag = true;//默认嘴是空的
    //当我嘴没满的时候，你就可以把内容接着往嘴里写
    while(flag && i<10){
        flag = ws.write(String(i++));
        console.log(flag);
    }
}
write();//就让嘴里吃两个
//drain 当嘴里的东西吃完了 会调用drain方法 抽干事件
ws.on('drain', function () {
    console.log('吃完了');
    write();
});

