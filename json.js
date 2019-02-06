async function fetchJson()
{
    let result = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "get"
    });
    let body = await result.json();
    
    for(let i=0;i<body.length;i++)
    {
        // document.writeln("Id:"+body[i].id);
        // document.writeln("Title:"+body[i].title);
        var ul = document.getElementById("main");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(body[i].id+body[i].title));
        ul.append(li);
    }
    //console.log(body);
    
}

fetchJson();