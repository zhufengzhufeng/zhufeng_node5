//预置参数

/*
function say(words){
    console.log(this.name,words);
}
var obj = {
    name:'珠峰'
};
var newSay = say.bind(obj);
newSay('上课了')
newSay('我爱你')*/
/*
function say(name){
    return function (worlds) {
        console.log(name,worlds);
    }
}
var newSay = say('珠峰');
newSay('上课了')
newSay('我爱你')
*/
function say (words){
    console.log(['珠峰'].concat(Array.prototype.slice.call(arguments)).toString());
}
say('我爱你');
say('我爱你');

function drink(num,callback){
    //num被保留下来了
    return function () {
        if(0==--num){
            callback();
        }
    }
}
var newDrink = drink(3, function () {
    console.log('喝完了');
});
newDrink();
newDrink();
newDrink();
