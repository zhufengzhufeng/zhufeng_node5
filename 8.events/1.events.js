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
        });
    }
};
//移除事件
Events.prototype.removeListener = function (eventName,callback) {
    //将eventName 对应的事件池里将callback移出掉
    //过滤掉当前数组内和我要关闭的同名方法 filter返回过滤好的数组
    this._events[eventName] = this._events[eventName].filter(function (item) {
        return item!=callback;
    });
};
//绑定一次 多次emit  只触发一次 绑定好后 把他执行 之后将绑定好的删除
Events.prototype.once = function (eventName,callback) {
    var that=this;
    function _callback() {
        callback.apply(that,arguments);
        this.removeListener(eventName,_callback);
    }
    this.on(eventName,_callback);
    //item.apply(this,args)
};
var e = new Events();
function marry(who){
    console.log(who);
}
/*function marry1(who){
    console.log(who,this.name);
}*/
e.once('结婚了',marry);
//e.on('结婚了',marry1);
//移出当前marry1的事件
e.removeListener('结婚了',marry);
//当我触发结婚了 会让对应的marry方法的得到执行
e.emit('结婚了','珠峰培训');
e.emit('结婚了','珠峰培训');
e.emit('结婚了','珠峰培训');
e.emit('结婚了','珠峰培训');
//当前这个函数是数组里的第一项
//[function(){},function(){}]
//作业： 加工一下