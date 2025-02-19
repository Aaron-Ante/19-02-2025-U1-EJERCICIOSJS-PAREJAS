//Modifica la función del ejercicio anterior para que use async y await.

// Función que devuelve una promesa (la misma del ejercicio 1)
function promesaResuelta() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Promesa resuelta");
      }, 2000); // 2000 milisegundos = 2 segundos
  });
}

// Función async/await
async function ejecutarPromesa() {
  console.log("Esperando a que la promesa se resuelva...");
  const mensaje = await promesaResuelta(); // Espera a que la promesa se resuelva
  console.log(mensaje); // Imprime "Promesa resuelta" después de 2 segundos
}

ejecutarPromesa();