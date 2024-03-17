// Función principal que muestra las opciones al usuario y maneja el flujo del programa
function mostrarOpciones() {
  // Opciones disponibles para el usuario
  const opciones = "1. Certificado de Aptitud Física\n2. Consulta por primera vez\n3. Consulta por segunda vez\n4. Consulta por tercera vez o más";

  // Muestro las opciones al usuario en una ventana emergente para seleccionar
  let eleccion = parseInt(prompt(`Seleccione una opción escribiendo el número correspondiente:\n\n${opciones}`));

  // Según la opción seleccionada, realizar la acción correspondiente
  switch (eleccion) {
    case 1:
      calcularCosto(4000); // Calcular costo para el certificado de aptitud física
      break;
    case 2:
      obtenerEdad(true); // Consulta por primera vez
      break;
    case 3:
      obtenerEdad(false); // Consulta por segunda vez
      break;
    case 4:
      obtenerEdad(false, true); // Consulta por tercera vez o más
      break;
    default:
      alert("Opción no válida. Por favor, seleccione una de las opciones mostradas.");
  }
}

// Función para obtener la edad del usuario y manejar el flujo de consulta
function obtenerEdad(esPrimeraConsulta, esTerceraOMas) {
  // Solicito al usuario que ingrese su edad
  let edad = parseInt(prompt("Ingrese su edad:"));

  // Verificar si el usuario es mayor de 18 años
  if (edad < 18) {
    alert("La consulta es solo para mayores de 18 años.");
    return; // Salir de la función si no cumple con la edad mínima
  }

  // Solicitar al usuario que ingrese la fecha de la consulta
  let fechaConsulta = prompt("Ingrese la fecha de la consulta (DD/MM/YYYY):");

  // Calcular el costo de la consulta con los datos proporcionados
  calcularCosto(edad, esPrimeraConsulta, esTerceraOMas, fechaConsulta);
}

// Función para calcular el costo de la consulta
function calcularCosto(edad, esPrimeraConsulta, esTerceraOMas, fechaConsulta) {
  let costoBase;

  const fecha = new Date(fechaConsulta);

  // Determino el costo según la fecha de la consulta
  if (fecha <= new Date(Date.now() + 24 * 60 * 60 * 1000)) {
    costoBase = 3500;
  } else if (fecha <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) {
    costoBase = 3000;
  } else {
    costoBase = 2500;
  }

  // Agrego costo adicional para personas mayores de 40 años
  if (edad > 40) {
    costoBase += 1000;
  }

  // Agrego descuentos según el tipo de consulta
  if (esPrimeraConsulta) {
    costoBase += 1000; // Agrego $1000 para la primera consulta
  } else if (!esTerceraOMas) {
    costoBase *= 0.8; // Aplico descuento del 20% para la segunda consulta
  } else {
    costoBase *= 0.9; // Aplico descuento del 10% para tercera consulta o más
  }

  // Muestro el costo de la consulta al usuario
  let mensaje = esPrimeraConsulta ? "primera" : (esTerceraOMas ? "tercera o más" : "segunda");
  alert(`Costo de la consulta en ${mensaje} vez: $${costoBase}`);
}

// Inicio el flujo de ventanas automáticamente al cargar la página
mostrarOpciones();
//terminado, son pesos Uruguayos cualquier consulta a las órdenes