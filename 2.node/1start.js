function read(callback){
   setTimeout(function () {
       console.log('读完了');
       callback();
   },2000);
}
function write(){
    console.log('写入');
}
read(write);