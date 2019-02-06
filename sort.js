var arr = [5,2,1,4];
function sort(arr1,fn)
{
    for(var j = 0;j<arr1.length-1;j++)
    {
        for(var i = 0 ;i<arr1.length-j-1;i++)
        {
            var ab = fn(arr1[i],arr1[i+1]);
            if(ab>0)
            {
                temp = arr1[i];
                arr1[i] = arr1[i+1];
                arr1[i+1] = temp;
            }
            
        }
        
    }
    console.log(arr1);
}



sort(arr,function(a,b){return b-a});

