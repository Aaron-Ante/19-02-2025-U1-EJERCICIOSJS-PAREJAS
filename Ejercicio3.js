//Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.

var edad; 

edad = prompt('Dame tu edad'); //solicita la edad de usuario 
edad = Number(edad);  // convierte la entrada de usuario a numero

if (edad > 17) {
  console.log("Es mayor de edad"); // si la edad es mayor de 17 muestra este mensaje 
} else {
  console.log("Es menor de edad"); // si la edad es menor de 17 muestra este mensaje
}
