title: CA. NODE安装与配置
speaker:  珠峰培训
url: http://www.zhufengpeixun.com
transition: cards
theme: blue
highlightStyle:javascript

[slide]
#Node.js 安装
- *LTS*标准版 *Current*最新版  {:&.zoomIn}
- 稳定版本中已经发布的API是不会改变的

[slide]
[magic]
1. 打开官网主页下载推荐版本  
windows64位 http://pan.baidu.com/s/1c2I3gfm  
windows32位 http://pan.baidu.com/s/1nvq00tF
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/download.jpg" class="img-responsive">
====
2. 如果推荐的版本不合适可以进入下载页面    
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)    
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/downloadlist.jpg" class="img-responsive">
> 根据不同平台系统选择你需要的Node.js安装包。

> 注意：Linux上安装Node.js需要安装Python 2.6 或 2.7 ，不建议安装Python 3.0以上版本。
[/magic]

[slide]
#window步骤
[magic]
##步骤 1 : 双击下载后的安装包 node-v4.2.1-x64.msi运行安装程序：
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/install_1.jpg" class="img-responsive">
====
##步骤 2 : 勾选接受协议选项，点击 next（下一步） 按钮 :
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/install_2.jpg" class="img-responsive">
====
##步骤 3 : Node.js默认安装目录为 "C:\Program Files\nodejs\" , 你可以修改目录，并点击 next（下一步）：
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/install3.jpg" class="img-responsive">
====
##步骤 4 : 点击树形图标来选择你需要的安装模式 , 然后点击下一步 next（下一步）
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/install4.jpg" class="img-responsive">
====
##步骤 6 :点击 Install（安装） 开始安装Node.js。你也可以点击 Back（返回）来修改先前的配置。 然后并点击 next（下一步）：
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/install5.jpg" class="img-responsive">
====
##点击 Finish（完成）按钮退出安装向导。
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/install6.jpg" class="img-responsive">
[/magic]

[slide]
##检测PATH环境变量是否配置了Node.js
[magic]
- 点击开始菜单,点击运行
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/run1.jpg" class="img-responsive">
====
- 输入 `cmd`
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/run2.jpg" class="img-responsive">
====
- 输入命令`path`输出结果
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/run3.jpg" class="img-responsive">
====
如果有`node`的路径的话就表示配置正确，可以在命令行下执行 `node` 命令
检查node.js版本  `node -v`    
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/node版本.jpg" class="img-responsive">
[/magic]

[slide]
##如果没有的话就需要手工再次配置环境变量
- 打开资源管理器   {:&.zoomIn}
- 在计算机上点击右键，显示菜单后点击属性
- 选择高级系统设置
- 选择高级页签下的环境变量
- 在用户变量中找到path,如果没有就新建一个
- 在path的最前面添加node.js的安装路径，如 `C:\Program Files\nodejs`

[slide]
##配置环境变量
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/run4.jpg" class="img-responsive">
<img src="http://7xjf2l.com2.z0.glb.qiniucdn.com/run5.jpg" class="img-responsive">

[slide]
##MAC安装包安装
* 下载结束后，单击下载的文件，运行它，会出现第一个向导对话框。 {:&.zoomIn}
* 单击continue按钮开始安装，紧接着向导会向你询问系统用户密码，输入密码后就开始安装。
* 不一会儿就会看见一个提示Node已经被安装到计算机上的确认窗口

[slide]
##MAC下homebrew安装
1. 先安装homebrew {:&.zoomIn}
  打开网站 http://brew.sh/
2. 在terminal下安装*Homebrew*
  homebrew依赖`ruby`,如果安装出错检查一下ruby的版本以及路径
  `ruby -v`
3. 通过homebrew安装node.js
    `brew install node`
4. 其它软件也都可以通过homebrew安装 ` brew install mongodb redis git `
