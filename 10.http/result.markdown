# require('events');
- on/addListener
- removeListener/removeAllListener
- once
- listenerCount/setMaxListeners
- emit
# stream
- fs.createReadStream
```
    //启动流动模式
    rs.on('data',function(){})
```

```
    //读取完毕
    rs.on('end',function(){})
```

```
    //错误
    rs.on('error',function(){})
```

```
   rs.resume();恢复
   rs.pause();暂停
```
- fs.createWriteStream
```
    var flag = ws.wirte()
    ws.end()
```
```
    ws.on('drain',function(){})
```
```
    fs.createReadStream('./1.txt').pipe(fs.createWriteStream('./2.txt'))
```


    