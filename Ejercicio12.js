// Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.

let precios = [10, 20, 30, 40]; // arreglo precios

let total = precios.reduce((acumulador, precio) => acumulador + precio, 0);  // Calcula la suma total

console.log(total); // Salida: 100
