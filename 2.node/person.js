
function Person(name){
    this.name = name;
}
//指向的是新的空间不会导致module.exports的变化，所以返回的还是空对象
console.log(100);
module.exports = Person;
//因为返回的是module.exports所有把我们的函数直接放在module.exports 上就可以了

/*
(function(require,exports,module,__dirname,__filname){
    exports = module.exports = {};


    return module.exports;
})()
*/
