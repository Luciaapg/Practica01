document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    // Validación del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si todo es válido se mostramos una alerta
    alert("Formulario enviado correctamente.");

    // Limpiar las casillas del formulario
    document.getElementById('nombre').value = "";
    document.getElementById('email').value = "";
});
