// Código de Encriptacion
//     "a", "ai"
//     "e", "enter"
//     "i", "imes"
//     "o", "ober"
//     "u", "ufat"
// 

let textoEntrada = document.getElementById("entrada"); // textArea de Entrada
let textoSalida = document.getElementById("salida"); // textArea de Entrada


function btnEncriptar(){
    
    let texto = document.getElementById("entrada").value
    
    if(texto.length != 0) {
        let textoEncriptado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat")
            .replace(/é/gi, "enter")
            .replace(/í/gi, "imes")
            .replace(/á/gi, "ai")
            .replace(/ó/gi, "ober")
            .replace(/ú/gi, "ufat");

        
        textoSalida.textContent = textoEncriptado;
        textoSalida.style.backgroundImage = "url('encriptado.png')";
        textoSalida.style.backgroundSize="30%";

    }
    else {
        alert("El textarea está vacío. Por favor, ingresa un mensaje.");
        return; // 
    }
} 


function btnDesencriptar() {

    let texto = document.getElementById("entrada").value
    
    if(texto.length != 0) {
        let textoEncriptado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        
        textoSalida.textContent = textoEncriptado;
        textoSalida.style.backgroundImage = "url('encriptado.png')";
        textoSalida.style.backgroundSize="30%";

    }
    else {
        alert("El textarea está vacío. Por favor, ingresa un mensaje.");
        return; // Detiene la ejecución de la función si el textarea está vacío
    }
}


function copiarAlPortapapeles() {
    let texto = document.getElementById("salida");
    texto.select();
    document.execCommand("copy");
    
    textoEntrada.value = "";
    location.reload(); // recargo la pagina para limpiar reiniciar todo.    

  }
