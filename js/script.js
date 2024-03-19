// Función para obtener la selección del usuario
function obtenerSeleccion(opciones) {
  let eleccion;
  do {
    eleccion = prompt(`Seleccione una opción escribiendo el número correspondiente:\n\n${opciones}`);
  } while (!/^[1-4]$/.test(eleccion)); // Continuar solicitando la selección hasta que sea válida
  return eleccion;
}

// Función para obtener la edad del usuario
function obtenerEdadValida() {
  let edad;
  do {
    edad = parseInt(prompt("Ingrese su edad:"));
    if (isNaN(edad)) {
      alert("Por favor, ingrese un número válido para la edad.");
    } else if (edad < 18) {
      alert("Lo sentimos, solo se realizan consultas a mayores de 18 años.");
    }
  } while (isNaN(edad) || edad < 18); // Continuar solicitando la edad hasta que sea un número válido mayor o igual a 18
  return edad;
}

// Función para obtener la fecha de la consulta
function obtenerFechaConsulta() {
  let fechaConsulta;
  do {
    fechaConsulta = prompt("Ingrese la fecha de la consulta (DD/MM/YYYY):");
  } while (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaConsulta)); // Continuar solicitando la fecha hasta que sea válida
  return fechaConsulta;
}

// Función para calcular el costo del certificado de aptitud física
function calcularCostoCertificado(costoBase) {
  alert(`Costo del certificado de aptitud física: $${costoBase}`);
}

// Función para calcular el costo de la consulta
function calcularCostoConsulta(edad, esPrimeraConsulta, esTerceraOMas, fechaConsulta) {
  let costoBase;

  // Determino el costo según la fecha de la consulta
  let fecha = convertirFecha(fechaConsulta);

  if (fecha <= sumarDias(new Date(), 1)) {
    costoBase = 3500; // Consulta dentro de las primeras 24 horas
  } else if (fecha <= sumarDias(new Date(), 7)) {
    costoBase = 3000; // Consulta dentro de la primer semana
  } else {
    costoBase = 2500; // Consulta agendada para luego de 1 semana
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

// Función para convertir una cadena de fecha en un objeto de fecha
function convertirFecha(fechaStr) {
  let partes = fechaStr.split('/');
  return new Date(partes[2], partes[1] - 1, partes[0]);
}

// Función para sumar días a una fecha
function sumarDias(fecha, dias) {
  let nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}

// Función para mostrar opciones al usuario y manejar el flujo
function mostrarOpciones() {
  // Opciones para el usuario
  let opciones = "1. Certificado de Aptitud Física\n2. Consulta por primera vez\n3. Consulta por segunda vez\n4. Consulta por tercera vez o más";

  // Muestro las opciones al usuario en una ventana emergente 
  let eleccion = obtenerSeleccion(opciones);

  // Según la opción seleccionada, realizar la acción correspondiente
  switch (eleccion) {
    case "1":
      calcularCostoCertificado(4000); // Calculo costo para el certificado de aptitud física
      break;
    case "2":
      let edadConsulta = obtenerEdadValida(); // Obtener la edad válida del usuario
      let fechaConsulta = obtenerFechaConsulta(); // Obtener la fecha de la consulta
      calcularCostoConsulta(edadConsulta, true, false, fechaConsulta); // Calcular el costo de la consulta por primera vez
      break;
    case "3":
      let edadConsulta2 = obtenerEdadValida(); // Obtener la edad válida del usuario
      let fechaConsulta2 = obtenerFechaConsulta(); // Obtener la fecha de la consulta
      calcularCostoConsulta(edadConsulta2, false, false, fechaConsulta2); // Calcular el costo de la consulta por segunda vez
      break;
    case "4":
      let edadConsulta3 = obtenerEdadValida(); // Obtener la edad válida del usuario
      let fechaConsulta3 = obtenerFechaConsulta(); // Obtener la fecha de la consulta
      calcularCostoConsulta(edadConsulta3, false, true, fechaConsulta3); // Calcular el costo de la consulta por tercera vez o más
      break;
    default:
      alert("Opción no válida. Por favor, seleccione una de las opciones mostradas.");
      mostrarOpciones(); // Volver a mostrar las opciones
  }
}

// Inicio el flujo de ventanas automáticamente al cargar la página
mostrarOpciones();


//Terminado, los costos son en pesos uruguayos, cualquier consulta médica a las órdenes! Dra Lecuna 
