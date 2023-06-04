// Código de Encriptacion
//     "a", "ai"
//     "e", "enter"
//     "i", "imes"
//     "o", "ober"
//     "u", "ufat"
// 

let textoEntrada = document.getElementById("entrada").value; // textArea de Entrada
let textosalida = document.getElementById("salida") // textArea de Entrada

function btnEncriptar(){
    
    textoEntrada = document.getElementById("entrada").value;

    if(textoEntrada.length != 0) {
        let textoEncriptado = textoEntrada
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

         console.log(textoEncriptado);
         console.log(textoEntrada.length);
    }
    else {
        alert("El textarea está vacío. Por favor, ingresa un mensaje.");
        return; // Detiene la ejecución de la función si el textarea está vacío
    }
} 

