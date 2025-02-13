// Actualizar resolución de pantalla
function updateResolution() {
    var resolution = document.getElementById("resolution").value;
    document.getElementById("resolution-value").textContent = resolution;
}

// Actualizar calidad gráfica
function updateGraphics() {
    var graphics = document.getElementById("graphics").value;
    document.getElementById("graphics-value").textContent = graphics.charAt(0).toUpperCase() + graphics.slice(1);
}

// Actualizar volumen
function updateVolume() {
    var volume = document.getElementById("volume").value;
    document.getElementById("volume-value").textContent = volume + "%";
}

// Guardar configuración
function saveSettings() {
    var resolution = document.getElementById("resolution").value;
    var graphics = document.getElementById("graphics").value;
    var volume = document.getElementById("volume").value;

    alert(`Configuración guardada:\nResolución: ${resolution}\nCalidad gráfica: ${graphics}\nVolumen: ${volume}%`);
}