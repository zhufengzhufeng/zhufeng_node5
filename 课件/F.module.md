title: F.模块
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##JS不足
- js没有*模块*系统，不支持*封闭作用域*或*依赖管理* {:&.zoomIn}
- 没有*标准*库，没有文件系统API
- 没有*包*管理系统，不能自动加载和安装依赖

[slide]
##commonjs规范
* 一个 node.js由大量模块组成，*每个*JS文件都是一个模块 {:&.zoomIn}
* 实现了`require`方法，npm基于`commonjs`实现了自动加载和安装依赖

[slide]
##模块化优点
* 增加*内聚*性，有助分工协作 {:&.zoomIn}
* 方便*重构*
* 提高代码*质量*

[slide]
##模块使用
* 定义模块 {:&.zoomIn}
* 导出模块
* 使用模块
```原理
(function(exports,require,module,__filename,__dirname){
  return module.exports;
});
```

[slide]
##require
* 加载模块后会缓存，多次加载后得到同一对象 `require('./test.js')`
* 查看模块缓存 `console.log(require.cache);`
* 查询模块绝对路径 `require.resolve('./test.js');`
* 查看单个的模块缓存 `require.cache[require.resolve('./test.js')]`
* 删除模块缓存 `delete require.cache[require.resolve('./test.js')];`


[slide]
##导出类和对象
module.exports和exports的区别

[slide]
#包和npm
- **多个**模块可以封装成一个*包* {:&.moveIn}
- npm是node.js默认的模块管理器,用来安装和管理node模块 网址为 ```http://npmjs.org```
- 可以用包的方式通过**npm**安装、卸载、发布包

[slide]
##组织和管理模块  
放置多个模块的文件夹称为包,可以通过包来对一组具有相互依赖的有关系模块进行管理。
初始化一个项目 `npm init`
```json
{
"name":"包的名称",
"description"："包的简要说明。",
"version":"版本号",
"keywords"："关键字",
"licenses":"许可证",
"repositories"："仓库地址 ",
"dependencies":"包的依赖，一个关联数组，由包名称和版本组成。"
}
```
[slide]
##安装第三方包
http://www.gulpjs.com.cn/docs/getting-started/
* 全局安装 {:&.moveIn}
    直接下载到Node的安装目录中，**各个**项目都可以调用,适合工具模块，比如`webpack`

    ```
    npm install -global [package name]
    ```

* 本地安装
    将一个模块下载到**当前**目录的*node_modules*子目录，然后只有在**当前**目录和它的**子**目录之中，才能调用这个模块
    ```
    npm install  [package name] --save-dev/--save
    ```
* 查看全局路径  
```
    npm root -g
    ```
[slide]
## 卸载第三方包
*  卸载全局
    ```
    npm uninstall -g [package name]
    ```
*  卸载本地
    ```
    npm uninstall [package name] --save-dev
    ```
[slide]
##发布全局项目
* 创建并进入目录 `mkdir jiang && cd jiang` {:&.zoomIn}
* 初始化项目 `npm init jiang`  
* 注册用户 `npm adduser`
* 发布项目 `npm publish`
* nrm NPM registry 管理工具
<pre><code class="markdown">
npm install -g nrm 安装此工具
nrm ls 显示所有的源
nrm use cnpm 切换到中国源
nrm help 显示帮助
</code>
</pre>
----
> 注意项目的名称不能是别人已经注册的名称,尽量用自己的名字做前缀
> 如果注册失败的话可能是因为改了镜像地址了，需要改回来 npm config set registry "http://registry.npmjs.org/"
> 查看所有的配置项 `npm config ls`

[slide]
##模块分类
* 内置模块  {:&.zoomIn}
* 文件模块
* 第三方模块

[slide]
#util
* inherits {:&.zoomIn}
* inspect
* isArray
* isRegExp
* isDate
* isError

[slide]
##模块查找规则
* 当没有以'/'或者'./'来指向一个文件时，这个模块要么是<span class="red">核心</span>模块,要么就是从<span class="blue">node_modules</span>文件夹加载的
* 内置模块
* 第三方模块
  1. 从`module.paths`取出第一个目录开始。
  2. 直接从目录中查找，存在结束，不存在下一条。
  3. 尝试添加`.js`、`.json`查找
  4. 尝试将`require`的参数作为一个<span class="red">包</span>来查找，读取<span class="red">package.json</span>，取得`main`配置项指定的文件查找，不存在进行`3`
  5. 继续失败查看下一个目录
