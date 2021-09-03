//codigo reutilizable factorizado dentro de ese archivo  definir y darle mantenimiento a este archivo 
//llamadas desde cualquier fragmento de codigo 
//par a llamarlo es fun y las funciones anonimas es con el nombre y los valores numericos en este caso de suma y resta 


function sumaNumeros(num1, num2) {
    return num1 + num2;
}

function restaNumeros(num1, num2) {
    return num1 - num2;
}

function buscaCaracter(cadenaDondeBuscar, caracterBuscado) {
    encontrado = false;
    for (caracter of cadenaDondeBuscar) {
        encontrado = carcater == caracterBuscado// es lo mismo que S ==="s"
        if (encontrado)
            break;

    }
    return encontrado;
}