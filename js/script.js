function obtenerSeleccion(opciones) {
  let eleccion;
  do {
    
    eleccion = prompt(`Seleccione una opción escribiendo el número correspondiente:\n\n${opciones}`);
  } while (!/^[1-4]$/.test(eleccion)); // Continúo solicitando la selección hasta que sea válida
  return eleccion;
}


function obtenerEdadValida() {
  let edad;
  do {
    // Ingrese  edad 
    edad = parseInt(prompt("Ingrese su edad:"));
    if (isNaN(edad) || edad < 18 || edad > 120) {
      alert("Por favor, ingrese una edad válida (entre 18 y 120 años).");
    }
  } while (isNaN(edad) || edad < 18 || edad > 120); // Continúo solicitando la edad hasta que sea un número válido entre 18 y 120
  return edad;
}

//  fecha seleccionada por el usuario
function obtenerFechaSeleccionada() {
  let eleccionFecha;
  do {
   
    eleccionFecha = prompt(`Seleccione una opción escribiendo el número correspondiente:\n\n1. Dentro de las próximas 24 horas\n2. Dentro de la próxima semana\n3. Dentro del próximo mes`);
  } while (!/^[1-3]$/.test(eleccionFecha)); // Continúo solicitando la selección hasta que sea válida
  return eleccionFecha;
}

function obtenerFechaConsulta() {
  let fechaActual = new Date();
  let fechaConsulta;

  switch (obtenerFechaSeleccionada()) {
    case "1":
      // Dentro de las próximas 24 horas
      fechaActual.setDate(fechaActual.getDate() + 1);
      fechaConsulta = fechaActual;
      break;
    case "2":
      // Dentro de la próxima semana
      fechaActual.setDate(fechaActual.getDate() + 7);
      fechaConsulta = fechaActual;
      break;
    case "3":
      // Dentro del próximo mes
      fechaActual.setMonth(fechaActual.getMonth() + 1);
      fechaConsulta = fechaActual;
      break;
  }

  return fechaConsulta;
}

// costo de la consulta
function calcularCostoConsulta(edad, esPrimeraConsulta, esTerceraOMas, fechaConsulta) {
  let costoBase;
  let fecha = fechaConsulta;

  // Costo base según la fecha de la consulta
  if (fecha <= sumarDias(new Date(), 1)) {
    costoBase = 3500; // Dentro de las primeras 24 horas
  } else if (fecha <= sumarDias(new Date(), 7)) {
    costoBase = 3000; // Dentro de la próxima semana
  } else {
    costoBase = 2500; // Luego de 1 semana
  }

  // Costo adicional para personas mayores de 40 años
  if (edad > 40) {
    costoBase += 1000;
  }

  // Descuentos según el tipo de consulta
  if (esPrimeraConsulta) {
    costoBase += 1000; // Agrego $1000 para la primera consulta
  } else if (!esTerceraOMas) {
    costoBase *= 0.8; // Descuento del 20% para la segunda consulta
  } else {
    costoBase *= 0.9; // Descuento del 10% para tercera consulta o más
  }

  // Muestro el costo de la consulta al usuario
  let mensaje = esPrimeraConsulta ? "primera" : (esTerceraOMas ? "tercera o más" : "segunda");
  alert(`Costo de la consulta en ${mensaje} vez: $${costoBase}`);
}

// costo del certificado de aptitud física
function calcularCostoCertificado() {
  let costoBase = 4000; // es el mismo para cualquier edad o cualquier fecha
  alert(`Costo del certificado de aptitud física: $${costoBase}`);
}

function sumarDias(fecha, dias) {
  let nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}

function mostrarOpciones() {
  // Opciones para el usuario
  let opciones = "1. Certificado de Aptitud Física\n2. Consulta por primera vez\n3. Consulta por segunda vez\n4. Consulta por tercera vez o más";

  // Muestro las opciones en una ventana emergente 
  let eleccion = obtenerSeleccion(opciones);

  // Según la opción seleccionada, realizar la acción correspondiente
  switch (eleccion) {
    case "1":
      calcularCostoCertificado(); // costo para el certificado de aptitud física
      break;
    case "2":
      let edadConsulta1 = obtenerEdadValida(); //  edad válida del usuario
      let fechaConsulta1 = obtenerFechaConsulta(); // fecha de la consulta
      calcularCostoConsulta(edadConsulta1, true, false, fechaConsulta1); // costo de la consulta por primera vez
      break;
    case "3":
      let edadConsulta2 = obtenerEdadValida();  
      let fechaConsulta2 = obtenerFechaConsulta(); 
      calcularCostoConsulta(edadConsulta2, false, false, fechaConsulta2); // Costo de la consulta por segunda vez
      break;
    case "4":
      let edadConsulta3 = obtenerEdadValida(); 
      let fechaConsulta3 = obtenerFechaConsulta();  
      calcularCostoConsulta(edadConsulta3, false, true, fechaConsulta3); // Costo de la consulta por tercera vez o más
      break;
    default:
      alert("Opción no válida. Por favor, seleccione una de las opciones mostradas.");
      mostrarOpciones(); // Volver a mostrar las opciones
  }
}

// cargar la página
mostrarOpciones();
