/* Agregar (Append) */

let animal = document.getElementById("animal");
let especies = ["Perro", "Gato", "Tortuga", "Cocodrilo", "Conejo"];

for (const especie of especies){
    let li = document.createElement("li");
    li.innerHTML = especie;
    animal.append(li);
}

/*Input*/

document.getElementById("nombre").value = "Mamiferos";
document.getElementById("cantidad").value = 400;

let input = document.getElementedbyID("nombre");
console.log(input.value);
