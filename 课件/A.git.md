title: A. Git使用
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
##git使用

[slide]
##备份文件
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/cloundsave.jpg" class="img-responsive">
* 类似于用网盘备份电影  {:&.zoomIn}
* 我们的代码也需要*备份*。修改完了以后提交给版本库进行保管，哪一天代码没了也可以找回来。

[slide]
##记录历史
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/save.jpg" class="img-responsive">
* 比如我们打游戏就要*存档*，万一挂了还可以从上个存档的地方重玩。
* 和网盘不同，网盘保留的是最新的状态，*历史的记录*都没有了，修改的记录也都找不回来了
* 网盘无法知道文件里的*某行*代码是*何人*在*哪个时间*添加进去的

[slide]
##回到过去
* 如果我有一天不小心删除了某个文件，我们可以通过*历史备份*找回来

<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/timemachina.jpg" class="img-responsive">

[slide]
##多端共享
* Git仓库可以通过PC端、Android、IOS*移动端*等各个终端访问
* 可以*随时随地*修改代码,公司没干完的工作回家接着干

<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/multiscreen.jpg" class="img-responsive">

[note]
以前在家的时候领导让加班，可以说没代码啊，没环境啊。现在不行了，有git啊，有vpn啊
[/note]

[slide]
##团队协作
* 多个人或团队*合作*编写一个项目
* 合并代码处理*冲突*

<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/teambuild.jpg" class="img-responsive">

[slide]
##什么是Git
* Linux之父用C语言写了一个`分布式`版本控制系统

<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/distribution.png" class="img-responsive">
[note]
1. 分布式版本控制系统根本没有中央服务器
2. 每个人的电脑上都是一个完整的版本库
3. 某一个人的电脑坏掉了不要紧,重新拷贝就可以了
[/note]

[slide]
##windows 安装Git
1. 访问 http://git-scm.com
[magic data-transition="vertical3d"]
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/windowdownloadgit.jpg" class="img-responsive">
====
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/gitinstall.jpg" class="img-responsive">
====
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/gitstype.jpg" class="img-responsive">
[/magic]

[slide]
##Mac安装Git
访问 http://brew.sh

<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/macinstallhomebrew.jpg" class="img-responsive">
1. 拷贝对应脚本到终端下安装*HomeBrew*
2. 然后在终端执行 `brew install git`命令安装*git


[slide]
##配置git用户名和邮箱

```bash
git config --global user.name "你的github用户名"    
git config --global user.email "你的github邮箱"
```
> 不配置用户名和邮箱的话无法提交

> 注意各个部分中间的空格

[slide]
##创建版本库
1. 先创建一个空目录 ，然后进入此目录
2. 点击右键选择`Git-Bash`打开命令行
3. 输入`git init`命令把这个目录变成Git可以管理的仓库
> 如果你没有看到.git目录，那是因为这个目录默认是隐藏的，用`ls -al`命令就可以看见。
[note]
版本库可以简单理解成一个目录,这个目录里面的每个文件的修改、删除，Git都能跟踪。
[/note]

[slide]
##git工作流

<a target="blank" href="http://card.mugeda.com/campaigns/56d2c4a0a3664e3308000407/20160304090522/56d97729a3664e9c65000047/index.html">工作流</a>


[note]
第一个是你的工作目录，对应你的物理目录,树型结构，也就是编辑代码的地方，写代码的地方；
第二个是 暂存区，工作区和历史提交的中间缓存，代表需要提交的工作状态，维护虚拟树型结构,临时保存你的改动；
最后是 历史区，树型结构，历史仓库,指向你最近一次提交后的结果。
大部分时候是先提交到暂存区中，再提交到历史里面。也可以从历史记录里面检出数据到暂存区和工作区。
[/note]

[slide]
##添加文件
`git add `

[slide]
##提交文件
`git commit -m"注释 " `

[slide]
##GitHub
* 注册账号  {:&.zoomIn}
* 新建项目
* 克隆项目
* 忽略.idea文件夹

[slide]
## 第一次交作业流程(组长)
1. `fork`珠峰培训讲师的作业仓库 {:&.zoomIn}
2. 把自己的仓库`下载`到本地
3. 把自己的作业 `上传`到自己的github仓库
4. 发`pull request`给讲师
5. 在讲师的地址上合并代码
6. 添加组员账号
[slide]
## 第二次交作业流程(组员)
1. 克隆组长项目
2. 先`拉取`组长仓库最新代码
3. 将自己的作业（放入对应的文件夹）
4. git add/git commit
5. 再push前`拉取`组长仓库最新代码
6. `push`到组长仓库
[slide]
## 第二次交作业流程(组长)
1. 在本地`增加`讲师仓库
2. `拉取`自己的最新代码
2. `拉取`老师的最新的代码,如果冲突需要解决冲突
3. 把自己的作业 拷贝进去(如果组长没有要提交的东西可省略)
4. 把自己的作业`上传`到自己的`github`仓库(如果组长没有要提交的东西可省略)
5. 发`pull request`给讲师
6. 组长在讲师的仓库上合并
[slide]
##第一道作业
1. 参考教程
http://school.zhufengpeixun.cn/course/31
