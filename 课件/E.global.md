title: E.global
speaker: 珠峰培训
url: https://github.com/zhufengpeixun
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: blue
usemathjax: yes

[slide]
#Node.js中全局对象
* Node.js中有一个特殊的对象，称为全局对象`Global`,它及其所有属性都可以在程序的任何地方访问，即全局变量。
* 在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global

[slide]
#全局对象
* console {:&.zoomIn}
* __filename(不是global的属性)
* __dirname(不是global的属性)
* setTimeout
* setImmediate

[slide]
#process
* cwd {:&.zoomIn}
* chdir
* memoryUsage
* nextTick


