class Persona{
    constructor(nombre,apPaterno, pMaterno, email){
        
        this.nombre = nombre
        this.apPaterno = apPaterno
        this.pMaterno = pMaterno
        this.email = email
    }
    imprimePersona = function(){
        console.log(this);
     }
}

let persona1 = new Persona("Andrea"," Marin"," Perez","andy@gmail.com");
persona1.imprimePersona();

let persona2 = new Persona("Betzabé"," Marin"," Perez","betza@gmail.com");
persona1.imprimePersona();

let persona3 = new Persona("Gin"," Lopez"," Perez","ginlop@gmail.com");
persona1.imprimePersona();


let personas = [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

console.log(JSON.stringify(personas));//    Convierte a JSON 

