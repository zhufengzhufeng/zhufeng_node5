//发布订阅模式

//一个监听者 对应多个事件

//on监听  emit 触发  removeListener移出监听 once绑定一次
// 一对多的关系 {eventName:['事件1','事件2']}
function Events(){
    //做一个事件池 用来放我们的事件名和事件
    this._events = {};
    this.name = 'hello'
}
Events.prototype.on = function (eventName,callback) {
    //通过名字取出对应的事件池
    var cur = this._events[eventName];
    if(cur){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
Events.prototype.emit = function (eventName) {
    //将除了eventName后面的参数截取出来
    var args = Array.prototype.slice.call(arguments,1);
    var cur = this._events[eventName];
    var that = this;
    if(cur){
        cur.forEach(function (item) {
            //这里的this是window
            item.apply(that,args);
        })
    }
};
//移除事件
Event.prototype.removeListener = function () {

};
//绑定一次
Event.prototype.once = function () {

};
var e = new Events();
function marry(who){
    console.log(who);
}
function marry1(who){
    console.log(who,this.name);
}
e.on('结婚了',marry);
e.on('结婚了',marry1);
e.removeListener('结婚了',marry1);
//当我触发结婚了 会让对应的marry方法的得到执行
e.emit('结婚了','珠峰培训');