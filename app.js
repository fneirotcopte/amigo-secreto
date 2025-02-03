let amigos = [];

function agregarAmigo() {
    
    let nombreIngresado = document.getElementById("amigo").value;
    if (nombreIngresado === ""){
        alert("Ingrese un nombre. ")
    } else{
        amigos.push(nombreIngresado);
        console.log(amigos);
        document.getElementById("amigo").value = ""; 
    }
}

function actualizaLista(){
    document.getElementById("listaAmigos");
    
}


