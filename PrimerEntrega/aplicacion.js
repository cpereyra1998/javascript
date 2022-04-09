/* Funcion para suma de articulos: iria en el boton buy de la pagina shopping */


let numero1 = parseInt(prompt("Ingrese valor de su primer producto"));
let numero2 = parseInt(prompt("Ingrese valor de su segundo producto"));
let numero3 = parseInt(prompt("Ingrese valor de su tercer producto"));

function productos (a, b, c){
    let suma = a + b + c
    return suma;
    
}

let resultado = productos(numero1, numero2, numero3);
console.log("El total de sus productos es", resultado);

/* Funcion para contraseña: iria en el formulario de la pagina log in*/


let usuario = prompt("Ingrese su nombre de usuario")
let contrasena = prompt("Ingrese su contraseña")

    while(contrasena != "contraseñadada"){
        alert("Dato erroneo");
        capitalArgentina = prompt("Ingrese nuevamente su contraseña");
    }


