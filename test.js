function funcionExterna() {
  // Definir las funciones internas
  function funcion1() {
    console.log('Función 1');
  }

  function funcion2() {
    console.log('Función 2');
  }

  function funcion3() {
    console.log('Función 3');
  }

  funcion3()
  // Devolver solo una de las funciones
  return funcion1;
}

// Almacenar la función devuelta en una variable
const miFuncion = funcionExterna();

// Llamar a la función desde fuera de funcionExterna
miFuncion(); // Esto imprimirá 'Función 1'
