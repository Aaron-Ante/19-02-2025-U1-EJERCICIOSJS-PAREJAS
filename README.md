# 19-02-2025-U1-EJERCICIOSJS-PAREJAS
Ejercicios JavaScript hecho en parejas 

Problema 1:
Descripción:
Este ejercicio pide declarar una variable llamada nombre y asignarle un valor (en este caso, un nombre). Luego, se debe imprimir ese valor en la consola.

Cómo se resolvió:
- Se creó una variable llamada nombre y se le asignó el valor "Ante Camacho ".

Problema 2:
Descripción:
En este ejercicio se deben declarar dos variables con valores numéricos y luego realizar las operaciones matemáticas básicas: suma, resta, multiplicación y división. Finalmente, se deben imprimir los resultados en la consola.

Cómo se resolvió:
- Se crearon las variables numero1 y numero2, asignándoles los valores 2 y 5, respectivamente.
- Se realizaron las cuatro operaciones básicas:

Problema 3:
Descripción:
Este ejercicio solicita al usuario su edad y determina si es mayor de edad (18 años o más) o no. Según la respuesta, se imprime un mensaje en la consola.

Cómo se resolvió:
- Se usó prompt() para pedir al usuario que ingrese su edad.
- La entrada del usuario, que es un string, se convirtió a un número utilizando Number().
- Se empleó un if para verificar si la edad era mayor que 17 Si la condición era verdadera, se imprime "Es mayor de edad", en caso contrario, "Es menor de edad".

Problema 4:
Descripción:
Este ejercicio solicita imprimir los números del 1 al 10 en la consola.

Cómo se resolvió:
- Se utilizó un bucle for que comienza desde 0 y se incrementa en cada iteración.

Problema 5:
Descripción:
Este ejercicio pide crear una función que reciba un nombre y devuelva un mensaje de saludo personalizado, como "Hola, Juan".

Cómo se resolvió:
- Se creó la función saludar(nombre) que recibe un parámetro nombre.
- Dentro de la función, se usó la interpolación de cadenas para construir el mensaje de saludo, insertando el nombre recibido.

Problema 6:
Descripción:
Este ejercicio solicita crear un arreglo con los nombres de 5 ciudades y luego mostrar la segunda ciudad en la consola.

Cómo se resolvió:
- Se creó un array llamado ciudades que contiene 5 nombres de ciudades.
- se utilizó ciudades[1], ya que los índices en los arrays empiezan desde 0. Esto accede al segundo elemento (índice 1) del array.

Problema 7:
Descripción:
Este ejercicio requiere recorrer un arreglo de números y usar forEach() para imprimir cada número en la consola.

Cómo se resolvió:
- Se utilizó el método forEach() para iterar sobre cada elemento del array numeros.

Problema 8:
Descripción:
Se requiere crear un objeto llamado Persona con propiedades como nombre, edad y profesión, y luego imprimir la propiedad nombre en la consola.

Cómo se resolvió:
- Se definió un objeto con las propiedades nombre, edad y profesión y despues se imprimio la propiedad nombre del objeto.

Problema 9:
Descripción:
Se pide agregar una nueva propiedad llamada nacionalidad al objeto Persona del ejercicio anterior y mostrarla en la consola.

Cómo se resolvió:
- Se añadió la propiedad nacionalidad al objeto Persona, asignándole el valor 'Alemán'.


Problema 10:
Descripción:
Se pide usar el método .filter() para crear un nuevo arreglo que contenga solo las edades de las personas que son mayores de edad (18 años o más).

Cómo se resolvió:
- Se utilizó el método filter() para iterar sobre el arreglo edades y seleccionar solo los valores que son mayores o iguales a 18.

Problema 11:
Descripción:
Se solicita usar el método .map() para crear un nuevo arreglo donde cada número del arreglo original esté elevado al cuadrado.

Cómo se resolvió:
- Se utilizó el método map() para crear un nuevo arreglo donde cada número del arreglo numeros es elevado al cuadrado. La función dentro de map() toma cada número (x) y devuelve su cuadrado (x*x).

Problema 12:
Descripción:
Se requiere usar el método .reduce() para calcular la suma total de los elementos de un arreglo de precios.

Cómo se resolvió:
- Se empleó el método reduce() para acumular la suma de los elementos del arreglo precios. El acumulador (inicializado en 0) se va sumando con cada precio en el arreglo, hasta que se obtiene el total.

Problema 13:
Descripción:
Se pide escribir una función que imprima "Hola después de 3 segundos" utilizando setTimeout().

Cómo se resolvió:
- Se utilizó setTimeout() dentro de una promesa que se resuelve después de 3 segundos (3000 milisegundos).
- Se resolvió mediante una promesa para manejar la ejecución asíncrona y se usó then() para manejar el resultado.

Problema 14:
Descripción:
Se pide crear una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".

Cómo se resolvió:
- Se definió una función llamada promesaResuelta() que devuelve una nueva promesa.
- La promesa se resuelve después de 2 segundos (2000 milisegundos) mediante setTimeout().
- Se utilizó .then() para manejar el resultado cuando la promesa se resuelve, imprimiendo el mensaje "Promesa resuelta" en la consola.

Problema 15:
Descripción:
Se pide modificar la función del ejercicio anterior para que utilice async y await.

Cómo se resolvió:
- Se definió una nueva función llamada ejecutarPromesa() como async. Dentro de esta función, se utilizó await para esperar a que la promesa devuelta por promesaResuelta() se resuelva antes de continuar.
- Se empleó la sintaxis await para hacer la espera de la promesa de forma más simple y legible.

Problema 16:
Descripción:
Crear una función que valide si una cadena de texto es un correo electrónico válido utilizando una expresión regular.

Cómo se resolvió:
- Se definió una expresión regular correoRegex que verifica el formato estándar de un correo electrónico.
- Se implementó una función que recibe un texto y verifica si este coincide con la expresión regular. Si la cadena es válida, se imprime "Correo Válido", de lo contrario, se imprime "Correo no válido, intente de nuevo".
- Se probó la función con un correo electrónico válido, "joluvargaspa@ittepic.edu.mx", lo cual imprime "Correo Válido".

Problema 17:
Descripción:
Dado un string "Hola, cómo estás?", convertirlo a mayúsculas y eliminar las comas.

Cómo se resolvió:
- Se utilizó el método toUpperCase() para convertir el string a mayúsculas.
- Se utilizo el método replace() para la eliminacion de la ","

Problema 18:
Descripción:
Dado un arreglo de palabras ["banana", "manzana", "pera", "uva"], usar el método .sort() para ordenarlas alfabéticamente.

Cómo se resolvió:
- Se utilizó el método sort() para ordenar el arreglo palabras de forma alfabética.

Problema 19:
Descripción:
Usar fetch() para obtener información de la API https://jsonplaceholder.typicode.com/todos/1 y mostrar el resultado en consola.

Cómo se resolvió:
- Se utilizó el método fetch() para realizar la solicitud HTTP a la URL proporcionada.
- Se utilizó el método .json() para convertir la respuesta en formato JSON.
- Se utilizo .then() para manejar la respuesta y mostrarla en consola.

Descripción:
Crear un array llamado tareas que almacene objetos con las propiedades id, descripcion, y completado. Se deben agregar funciones para:
- Agregar una tarea.
- Eliminar una tarea por su id.
- Marcar una tarea como completada.

Cómo se resolvió:
- Se crea el array tareas para almacenar las tareas.
- Se definen tres funciones principales:
* agregarTarea(descripcion): Agrega una tarea al array con una descripción proporcionada y asigna un ID único.
* eliminarTarea(id): Elimina una tarea del array buscando su id.
* completarTarea(id): Marca una tarea como completada basándose en su id.
* mostrarTareas(): Función adicional para mostrar todas las tareas con sus propiedades.

Ejemplo que usamos:
Se agregan tres tareas.
Se marca la primera tarea como completada.
Se eliminan tareas.
Finalmente, se muestran todas las tareas.
