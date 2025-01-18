// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    const lista = document.getElementById("listaAmigos");
    const listItem = document.createElement("li");
    listItem.textContent = nombre;
    lista.appendChild(listItem);

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}