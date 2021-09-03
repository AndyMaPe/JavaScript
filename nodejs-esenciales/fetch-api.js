// E s el mas nuevo utilizado para conectarnos para rutas solo con la url se ahce el get y hace la llamda de estos valores 


fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(json => console.log(json));

fetch('http://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        TITLE: "Wash the dishes",
        completed: false
    }),

    headers: {
        "Context-type": "application/json"
    }
})
.then(response => response.json()) 
.then(json => console.log(json))


async function getUser(id) 
{
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json()
    return data;
}

//let data = getUser(5);
  //  console.log(`data: ${data}`);
getUser(5).then((data) => console.log(data));