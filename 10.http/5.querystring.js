
var querystring = require('querystring');

querystring.parse('username==123&&password==321');
//像json.parse 默认以=  & 分割
console.log(querystring.parse('username==123&&password==321','&&','==')); //可以指定分割符字段之间用&&  keyvalue直间用==

//转成字符串
querystring.stringify({ username: '123', password: '321' })
console.log(querystring.stringify({ username: '123', password: '321' },'&&','=='));
/*
{ username: '123', password: '321' }
username==123&&password==321
*/
