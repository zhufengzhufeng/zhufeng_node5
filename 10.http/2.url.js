//对url路径进行解析的 核心模块
var url = require('url');
//true将查询字符串转换成对象
console.log(url.parse('http://123:456@zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd#tap',true));




/*

Url {
    protocol: 'http:', 协议
        slashes: true,  是否有//
        auth: null, 用户名密码
        host: 'zhidao.baidu.com', 主机
        port: null, 80 端口
        hostname: 'zhidao.baidu.com', 主机名
        hash: null, hash值
        search: '?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd', 路径和和hash值之间的
        query: 'lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd', 同过true转换成对象
        pathname: '/search',  路径
        path: '/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd', 路径+查询字符串
        href: 'http://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=asdasd' }
*/
