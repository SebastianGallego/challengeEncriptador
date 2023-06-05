// Código de Encriptacion
//     "a", "ai"
//     "e", "enter"
//     "i", "imes"
//     "o", "ober"
//     "u", "ufat"
// 

let textoEntrada = document.getElementById("entrada").value; // textArea de Entrada
let textoSalida = document.getElementById("salida"); // textArea de Entrada


console.log(textoEntrada);
console.log(textoEntrada.length);

function btnEncriptar(){
    
    textoEntrada = document.getElementById("entrada").value

    if(textoEntrada.length != 0) {
        let textoEncriptado = textoEntrada
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        
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
