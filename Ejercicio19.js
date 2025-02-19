//Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra 
//el resultado en consola.


fetch('https://jsonplaceholder.typicode.com/todos/1') // Realiza la solicitud a la API
  .then((response) => response.json()) //convierte la respuesta en formato JSON
  .then((json) => console.log(json)); // imprime en consola 
