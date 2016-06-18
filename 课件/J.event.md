title: J.事件
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
#事件
观察者模式，定义对象间的一种<span class="red">一对多</span>的依赖关系，一个发布者可以对应多个订阅者，当发布者<span class="red">发生变化</span>的时候，他可以将消息一一通知给所有的订阅者,当一个对象的状态发生改变时，所有依赖于它的对象都<span class="red">得到通知并被自动更新</span>。

[slide]
#订阅

```javascript
Observable.prototype.on = Observable.prototype.addListener = function (event, listener) {
    if (this._events[event]) {
        this._events[event].push(listener);
    } else {
        this._events[event] = [listener];
    }
    if(this._events[event].length>this._maxListeners){
        console.error('maxListener reached!');
    }
}
```

[slide]
#发布事件

```javascript
Observable.prototype.emit = function(event){
    var args = Array.prototype.slice.call(arguments,1);
    if(this._events[event]){
        var listeners = this._events[event];
        listeners.forEach(function(listener){
            listener.apply(null,args);
        });
    }
}
```


[slide]
#EventEmitter方法

* addListener(event,listener) 对指定事件绑定 {:&.zoomIn}
* on(event,listener)对指定事件绑定
* once(event,listener);绑定一次
* removeListener(event); 解除监听
* removeAllListeners(event); 解除所有处理
* emit(event,arg1); 触发事件
* setMaxListeners(n); 最大监听数量
* listeners(event) 所有事件处理函数
* listenerCount(emitter,event) 获取某个对象指定处理函数