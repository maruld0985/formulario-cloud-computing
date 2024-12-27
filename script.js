// Array para almacenar los estudiantes
const estudiantes = [];

// Función para guardar los datos del estudiante
function guardarEstudiante() {
  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const correo = document.getElementById("correo").value.trim();

  // Validar los campos
  if (!nombre || !apellido || !edad || !correo) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Agregar el estudiante al arreglo
  estudiantes.push({ nombre, apellido, edad, correo });

  // Limpiar el formulario
  document.getElementById("formEstudiante").reset();

  // Actualizar la tabla
  actualizarTabla();
}

// Función para actualizar la tabla con los estudiantes
function actualizarTabla() {
  const tbody = document.querySelector("#tablaEstudiantes tbody");
  tbody.innerHTML = ""; // Limpiar la tabla

  estudiantes.forEach((estudiante) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${estudiante.nombre}</td>
      <td>${estudiante.apellido}</td>
      <td>${estudiante.edad}</td>
      <td>${estudiante.correo}</td>
    `;

    tbody.appendChild(fila);
  });
}

// Agregar evento al botón de guardar
document.getElementById("btnGuardar").addEventListener("click", guardarEstudiante);
