//将其他进制转换成10进制
parseInt('111111',2);//后面的表示当前的进制 -》十进制
console.log(parseInt('111111',2)); //最大不超过64
//将10进制转换成其他进制
//()转换成对象Number.toString
console.log(10..toString(2));//1010
//base64 表示的最大值不能超过64  将我们的汉字转换成可见字符
'珠'//base64
//1.步骤1先转换成buffer
var buffer = new Buffer('珠');
//通过索引取出buffer默认是 10进制的
console.log(buffer[0]);//e7 8f a0
console.log(buffer[1]);//e7 8f a0
console.log(buffer[2]);//e7 8f a0
//将16进制转换成10进制再转换成2进制
//231
//143
//160
console.log((231).toString(2));
console.log((143).toString(2));
console.log((160).toString(2));
//00111001 00111000 00111110 00100000
//将3个八位的 变成4个6位的 不够8位的补0
//在将2进制转换成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//57 56 62 32//要将10进制转换成对应的可见字符
//通过算出来的10进制找到对应的字母
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase()
str+='0123456789'
str+='+/';
console.log(str[57]+str[56]+str[62]+str[32]);
//54+g

