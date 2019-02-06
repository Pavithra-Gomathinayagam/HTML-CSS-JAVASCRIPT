var arr = new Array(1,2,3);
Array.prototype.iterate=function(fn){
    for(var i = 0 ;i<this.length;i++)
    {
        fn(this[i]);
    }
};


arr.iterate(function(element){
    console.log(element);
});