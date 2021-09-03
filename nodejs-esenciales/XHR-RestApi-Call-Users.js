//objetoq  uqe permite interactuar con el http se define con var pero que sea nuevo de httprequest para llamar a la api remota 

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests

//awui se dice que si fue positivo da los resultados de succes y si no dira que fue fail 
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		//console.log('success!', xhr);
		let usuarios = JSON.parse(xhr.responseText);
		usuarios.forEach(usuario => {
			console.log(`Nombre: ${usuario.name} Email: ${usuario.email}`)
		});

	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	//console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL

// xhr permite hacer la llamda y se hace un get  llamar con el open  y aqui en el 'http' se hace la conexion
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();// cuando esto haya terminado se ejecutara en un onload
console.log('Hola!!!')
