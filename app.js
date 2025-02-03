let amigos = [];

function agregarAmigo() {   
    let nombreIngresado = document.getElementById("amigo").value;
    if (nombreIngresado === ""){
        alert("Ingrese un nombre. ")
    } else{
        amigos.push(nombreIngresado);
        console.log(amigos);
        document.getElementById("amigo").value = ""; 
        actualizaLista();
    }
}

function actualizaLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML= "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent= amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No has agregado amigos.");
    } else if (amigos.length === 1){
        alert("Debes ingresar mas de un nombre. ");
    } else {
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let sorteo = document.getElementById("resultado");
        sorteo.innerHTML = amigoSorteado;
    }
}