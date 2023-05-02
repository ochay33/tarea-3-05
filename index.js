let h1 = document.querySelector("h1");
h1.innerText = "Bienvenido";

let div = document.querySelector("#divinput");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { 
    const texto = input.value.trim();
    if (texto !== "") {
      const nuevoElemento = document.createElement("li");
      nuevoElemento.innerText = texto;
      const nuevoBoton = document.createElement("button");
      nuevoBoton.innerText = "X";
      nuevoBoton.addEventListener("click", function() {

        let confirmacion = confirm("¿Seguro que deseas eliminar esta tarea?");
        if (confirmacion) {
            nuevoElemento.remove();
        }
      });
      nuevoElemento.appendChild(nuevoBoton);
      lista.appendChild(nuevoElemento);
      input.value = "";
    }
  }
});






