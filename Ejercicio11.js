// Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté
// elevado al cuadrado.

let numeros = [1, 2, 3, 4, 5] //arreglos con numeros 
var doble = numeros.map(function(x){ // Utiliza map() para elevar al cuadrado cada número
 return x*x; //devuelve el cuadrado del numero 
});

console.log(doble); //muestra arreglo con numeros elevados al cuadrado