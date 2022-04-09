
                                        /* Pagina SHOPPING */

/* Funcion para suma de articulos */


let numero1 = parseInt(prompt("Ingrese valor de su primer producto"));
let numero2 = parseInt(prompt("Ingrese valor de su segundo producto"));
let numero3 = parseInt(prompt("Ingrese valor de su tercer producto"));

function productos (a, b, c){
    let suma = a + b + c
    return suma;
    
}

let resultado = productos(numero1, numero2, numero3);
console.log("El total de sus productos es", resultado);

/* Objeto para descripcion de productos */

function Te(nombre, precio, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

/* Array para cantidad de productos en stock*/

    /* Cantidad de té matcha */
const matcha = ["Floral Matcha", "Jasmin Green", "White Nymph"];
console.log(green.length);

    /* Cantidad de té ooblong */
const ooblong = ["Black Oolong", "Fairy Pink Ooblong", "Pixie Sunflower"];
console.log(ooblong.length);

    /* Cantida de té total en stock */
const stock = matcha.concat(ooblong)
console.log(stock.length)


                                    /* Pagina LOG IN */

/* Funcion para contraseña*/


let usuario = prompt("Ingrese su nombre de usuario")
let contrasena = prompt("Ingrese su contraseña")

    while(contrasena != "contraseñaEnBase"){
        alert("Dato erroneo");
        contrasena = prompt("Ingrese nuevamente su contraseña");
    }

