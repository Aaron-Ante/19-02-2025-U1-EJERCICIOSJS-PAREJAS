//Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con 
// los mayores de edad.

let edades = [12, 18, 25, 10, 30, 16]; //arreglo edades

let mayorEdad = edades.filter((edad)=> edad >= 18); // Filtra las edades mayores o iguales a 18
console.log(mayorEdad); // Muestra el arreglo con las edades de los mayores de edad