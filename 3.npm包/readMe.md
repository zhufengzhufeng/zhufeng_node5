# 我们要在当前项目
- 初始化package.json
```
    npm init
```
> 不要包含特殊字符 或者大写
- 全局安装
```
    npm install -g webpack
```
> 让webpack可以在全局下进行使用
- 全局变量里的可以直接使用 npm映射了一个webpack 指向了真实的文件
- 安装本地
- 开发时候的依赖（在开发的时候才用到上线的时候用不到）
```
    npm install --save-dev 文件名
```
- 写代码时候的依赖（代码依赖）
```
    npm install --save 文件名
```
- devDependencies 开发依赖
- dependencies 上线依赖
- 删除包
```
    npm uninstall --save-dev webpack
```
- 指定版本安装
```
    npm install jquery@1.9.1
```
- 卸载全局webpack
```
    npm uninstall -g webpack
```
- 查看全局安装路径
```
    npm root -g
```
- 一键初始化
```
    npm init -y
```
- 查看npm的配置
```
    npm config ls
```
```
    npm install nrm -g
```
- 切换源
```
    nrm use cnpm 
```
- 查看源
```
    nrm ls
```
- 登陆用户
```
    npm adduser
```
- 发布包
```
    npm publish
```
<!--
压缩，合并，打包-->
<!--
C:\Users\10354_000\AppData\Roaming\npm\webpack -> C:\Users\10354_000\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js-->
