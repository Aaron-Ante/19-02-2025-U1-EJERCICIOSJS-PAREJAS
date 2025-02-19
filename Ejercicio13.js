//Escribe una función que imprima "Hola después de 3 segundos" utilizando setTimeout().


async function saludar(){  // Definición de la función asíncrona
    return new Promise((resolve)=>{ // Crea una promesa
        setTimeout(()=>{ //funcion que se ejecuta despues de 3 segundos
            resolve("Hola") // Resuelve la promesa con el mensaje "Hola"
        },3000 ); // 3000 milisegundos (3 segundos)

    });
}

saludar() .then(mensaje =>{ // Al resolverse la promesa, muestra el mensaje en la consola
    console.log(mensaje); // imprime "Hola" despues de 3 seg
});