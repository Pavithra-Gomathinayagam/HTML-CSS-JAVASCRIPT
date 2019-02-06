
var person = {
sample : function(a,b,c)
{
    console.log(a+b+c);
}
}
// function sample(a,b,c)
// {
//     console.log(a+b+c);
// }

sample.apply(person,[1,2,3]);

//spread
var sample = (...argument) => {
    console.log();
}
//rest
sample(...[5,6,7,8,9]);

