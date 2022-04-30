// Formulario 

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
}

//Shopping

// Variables
// Falta armar una nueva pagina donde se indique la lista de compras

const carrito = document.getElementById("carrito");
const te = document.getElementsByClassName("lista-te");
const listaTe = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.getElementsByClassName("vaciar-carrito");

cargarEventListener();

function cargarEventListener() {
    // Agrega al carrito
    te.addEventListener("click", comprarTe);

    // Elimina un te del carrito
    carrito.addEventListener("click", eliminarTe);

    // Vaciar el carrito
    btnVaciarCarrito.addEventListener("click", vaciarCarrito);

    // AL cargar el documento, mostrar el localStorage
    document.addEventListener("DOMContentLoaded", cargarLocalStorage);
}


//Funciones

// Añade el te al carrito
function comprarTe(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
        const te = e.target.parentElement.parentElement;
        leerDatosCurso(te);
    }
}

// Vaciar el carrito de compras
function vaciarCarrito(e) {

    while (listaTe.firstChild) {
        listaTe.removeChild(listaTe.firstChild);
    }

    localStorage.removeItem("te");
    return false;
}

// Almacena te en el carrito al localStorage
function guardarCursoLocalStorage(te) {
    // Tomar el valor del localStorage
    let te = obtenerCursosLocalStorage();
    // El te seleccionado se agrega al arreglo
    te.push(te);
    localStorage.setItem("cursos", JSON.stringify(te));

}

