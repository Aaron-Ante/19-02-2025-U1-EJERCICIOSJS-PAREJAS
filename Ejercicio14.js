//Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje 
//"Promesa resuelta".


function promesaResuelta() { // Definición de la función que devuelve una promesa
    return new Promise((resolve, reject) => { // Crea una promesa
        setTimeout(() => { // Función que se ejecuta después de 2 segundos
            resolve("Promesa resuelta"); // Resuelve la promesa con el mensaje "Promesa resuelta"
        }, 2000); // 2000 milisegundos (2 segundos)
    });
}

promesaResuelta().then((mensaje) => { // Al resolverse la promesa, muestra el mensaje en la consola
    console.log(mensaje); // Imprime "Promesa resuelta" después de 2 segundos
});