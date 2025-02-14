// Seleccionamos el botón
const boton = document.getElementById('sound');

// Creamos un nuevo objeto de Audio y le asignamos el archivo de sonido
const sonido = new Audio('sonidos/start-sound.mp3');

// Añadimos un evento al botón para que suene al hacer clic
boton.addEventListener('click', function() {
  sonido.play();

  // Esperar que el sonido termine antes de cambiar de página
  sonido.onended = function() {
    window.location.href = 'personajes.html'; 
  };
});