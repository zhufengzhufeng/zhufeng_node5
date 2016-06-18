title: H.文件操作
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
#读取文件
- 异步读取 readFile  {:&.moveIn}
- 同步读取 readFileSync

[slide]
#写文件
- 异步写入 writeFile {:&.moveIn}
- 同步写入 writeFileSync

[slide]
#拷贝文件


[slide]
#目录操作
* `创建`目录 {:&.moveIn}
* 读取目录下`所有的文件`
* 查看文件目录`信息`
* 判断一个文件是否`存在`

[slide]
#路径处理
* join 将多个参数值字符串`结合`为一个路径字符串 {:&.moveIn}
* resolve 取得`绝对路径` 
* basename 获取一个路径中的`文件名`
* extname 获取一个路径中的`扩展名`
* path.sep 操作系统提定的`文件分隔符`
* path.delimiter 属性值为系统指定的环境变量`路径分隔符`
* path.normalize 将不正经的路径转换成`正经的`
