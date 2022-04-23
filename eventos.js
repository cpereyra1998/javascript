let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    alert("Ingreso correctamente");
}