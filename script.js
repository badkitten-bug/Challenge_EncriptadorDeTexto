function encriptar() {
    var texto = document.getElementById("inputtext").value.toLowerCase();
    console.log("Texto: " + texto);

    if (texto == null || typeof texto == 'undefined' || texto.length == 0) {
        alert('Primero coloca un poco de texto');
        return;
    }
    console.log("Texto: " + texto);
    var txtcifrado = texto.replace(/e/igm,"enter");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    console.log("txtcifrado: " + txtcifrado);
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtext").innerHTML = " ";
    document.getElementById("copiar").style.display = "initial";
}
  
function desencriptar() {
    var texto = document.getElementById("inputtext").value.toLowerCase();
    console.log("Texto: " + texto);
    if (texto == null || typeof texto == 'undefined' || texto.length == 0) {
        alert('Primero coloca un poco de texto');
        return; 
    }
    var txtcifrado = texto.replace(/enter/igm,"e");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    console.log("txtcifrado: " + txtcifrado);
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    console.log("txtcifrado: " + txtcifrado);
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtext").innerHTML = " ";
    document.getElementById("copiar").style.display = "initial";
}
  
function copiar() {
    var contenido = document.querySelector("#texto2");
    console.log("Contenido: " + contenido);
    contenido.select();
    document.execCommand('copy');
    alert("El texto encriptado ha sido copiado al portapapeles");
}