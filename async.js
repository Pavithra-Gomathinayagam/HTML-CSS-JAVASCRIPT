var notes = [{id:1,desc:"hello"},{id:2,desc:"hai"},{id:3,desc:"welcome"}];

var random = Math.floor((Math.random() * 10) + 1);
console.log(random);
function update(random)
{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            for(var index =0;index<notes.length;index++)
            {
                if(notes[index].id === random)
                {
                    resolve(random);
                }
            }
            reject("cannot be updated");

        },1000);
    });
}

function updatedesc(random)
{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            notes[random-1].desc+="morning";
            resolve(true);
        },1000);
    });
}

// update(random)
//     .then(index => {
//         console.log(notes[random-1].id);
//         return updatedesc(random)
//     })
//     .then(flag => {
//         console.log(flag);
//     })
//     .catch(err => {
//         console.error(err);
//     });

async function description()
{
    try{

        var index = await update(random);
        console.log(notes[index-1].id);
        var flag = await updatedesc(random);
        console.log(flag);
    

    }
    catch(err){
        console.log(err);
    }
}

description();