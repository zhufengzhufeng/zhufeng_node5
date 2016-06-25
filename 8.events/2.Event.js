//EventEmitter 核心模块

var EventEmitter = require('events');
var util = require('util');
function Girl(){

}
util.inherits(Girl,EventEmitter);
var g = new Girl();
//绑定事件的
function eat(who){
    console.log('吃',who);
}
function drink(who){
    console.log('喝水',who);
}
//on 和 addListener是等价的
g.setMaxListeners(1);
g.on('饿了',eat);
g.on('喝水',drink);
/*g.addListener('饿了',eat);
g.addListener('饿了',eat);*/
//g.removeListener('饿了',eat);
g.once('饿了',eat);
//removeListener移除最近的绑定
//g.removeListener('饿了',eat);
//移出所有监听 当没有参数的时候移出所有监听 有监听的时候移出对应的监听
//g.removeAllListeners('饿了');
//查看 当前监听事件的函数
console.log(g.listeners('饿了'));
//如果已经发射完了，当前的事件就被移除掉了 那count就少了
console.log(g.listenerCount('饿了'));
//g.listeners('饿了')
g.emit('饿了','我');
g.emit('喝水','我');
g.emit('饿了','我');
g.emit('饿了','我');



//最大监听数  默认10个

//总结 addlistener,on,once,removeListener, emit ,listenercount,setMaxListeners ,removeAllListener

