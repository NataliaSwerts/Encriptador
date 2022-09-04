

const inputResultado = document.querySelector(".resultado");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
const muneco = document.querySelector(".contenedor-muneco");
const h3 = document.querySelector(".h3");
const resultado = document.querySelector(".resultado")
const resultadoEncriptado = document.querySelector(".resultado-encriptado")


function encriptar () {
    ocultarAdelante();
    var mensaje = recuperarTexto()
    resultadoEncriptado.textContent = encriptarTexto(mensaje);
}

function desencriptar () {
    ocultarAdelante();
    var mensaje = recuperarTexto()
    resultadoEncriptado.textContent = desencriptarTexto(mensaje);
}

function recuperarTexto() {
    var mensaje = document.querySelector(".mensaje");
    return mensaje.value;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    resultado.classList.add("ocultar");
}
function encriptarTexto(texto) {
    var texto = texto;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto (texto) {
    var texto = texto;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3
        }
        else if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function copiar() {
    navigator.clipboard.writeText(resultadoEncriptado.innerHTML)
    
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;