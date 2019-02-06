var arr1 = ["pavi","kavi","savi"];

function iterate(arr,key1,fn)
{
    var count = 0;
    for(var index = 0;index<arr.length;index++)
    {
        
        if(key1 == arr[index])
        {
            fn(index);
            break;
        }
        else
        count++;
        
    }
    if(count == arr.length)
    fn(-1);
}
iterate(arr1,"savi",function(index){
    console.log(index);
});