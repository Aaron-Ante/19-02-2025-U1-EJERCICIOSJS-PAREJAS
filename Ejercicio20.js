/*
Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
Agregar una tarea.
Eliminar una tarea por id.
Marcar una tarea como completada.

*/
// Arreglo para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function agregarTarea(descripcion) {
  const nuevaTarea = {
      id: tareas.length + 1, // Genera un ID único para la nueva tarea
      descripcion: descripcion,
      completado: false // Por defecto, la tarea no está completada
  };
  tareas.push(nuevaTarea); // Agrega la nueva tarea al arreglo
  console.log(`Tarea "${descripcion}" agregada con éxito.`);
}

// Función para eliminar una tarea por su ID
function eliminarTarea(id) {
  const indice = tareas.findIndex(tarea => tarea.id === id); // Busca la tarea por ID
  if (indice !== -1) { // Si se encuentra la tarea
      const tareaEliminada = tareas.splice(indice, 1)[0]; // Elimina la tarea del arreglo
      console.log(`Tarea "${tareaEliminada.descripcion}" eliminada con éxito.`);
  } else {
      console.log(`No se encontró una tarea con el ID ${id}.`); // Si no se encuentra la tarea
  }
}

// Función para marcar una tarea como completada
function completarTarea(id) {
  const tarea = tareas.find(tarea => tarea.id === id); // Busca la tarea por ID
  if (tarea) { // Si se encuentra la tarea
      tarea.completado = true; // Marca la tarea como completada
      console.log(`Tarea "${tarea.descripcion}" marcada como completada.`);
  } else {
      console.log(`No se encontró una tarea con el ID ${id}.`); // Si no se encuentra la tarea
  }
}

// Función para mostrar todas las tareas
function mostrarTareas() {
  console.log("Lista de tareas:");
  tareas.forEach(tarea => {
      console.log(`ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Completado: ${tarea.completado ? 'Sí' : 'No'}`);
  });
}

// Ejemplo de uso de las funciones
agregarTarea("Terminar los ejercicios de tarea de la materia Servicios Web");
agregarTarea("Subir al repositorio los ejercicios");
completarTarea(1);
mostrarTareas();
agregarTarea("Borrar");
eliminarTarea(3);