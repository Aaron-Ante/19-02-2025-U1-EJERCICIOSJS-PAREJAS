// Crea una función que valide si una cadena de texto es un correo electrónico válido.

// Expresión regular para un correo electrónico
const correoRegex = "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}"; 

// Función que valida si el texto es un correo electrónico válido
const pruebaCorreo = (texto) => {
    if (texto.match(correoRegex)) { // Si coincide con el patrón
      console.log('Correo Valido'); // Imprime "Correo Valido"
    } else {
      console.log("Correo no valido, intente de nuevo"); // Imprime el mensaje si no es válido
    }
}

pruebaCorreo("joluvargaspa@ittepic.edu.mx"); // Llamada con un correo válido