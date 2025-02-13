// Obtener los elementos del HUD
const lifeBar = document.getElementById('life-bar');
const miniMap = document.getElementById('mini-map');
const attackButtons = document.getElementById('attack-buttons');

// Obtener los menús desplegables
const lifeBarPosition = document.getElementById('life-bar-position');
const mapPosition = document.getElementById('map-position');
const attackButtonsPosition = document.getElementById('attack-buttons-position');

// Función para actualizar las posiciones de los elementos del HUD
function updateHUD() {
    // Definir las posiciones predefinidas
    const positions = {
        "top-left": { top: '10px', left: '10px', transform: 'none' },
        "top-right": { top: '10px', right: '10px', transform: 'none' },
        "bottom-left": { bottom: '10px', left: '10px', transform: 'none' },
        "bottom-right": { bottom: '10px', right: '10px', transform: 'none' },
        "top-center": { top: '10px', left: '50%', transform: 'translateX(-50%)' },
        "bottom-center": { bottom: '10px', left: '50%', transform: 'translateX(-50%)' }
    };

    // Aplicar la posición de la barra de vida
    const lifePos = positions[lifeBarPosition.value];
    lifeBar.style.top = lifePos.top || '';
    lifeBar.style.left = lifePos.left || '';
    lifeBar.style.right = lifePos.right || '';
    lifeBar.style.bottom = lifePos.bottom || '';
    lifeBar.style.transform = lifePos.transform || '';

    // Aplicar la posición del mini mapa
    const mapPos = positions[mapPosition.value];
    miniMap.style.top = mapPos.top || '';
    miniMap.style.left = mapPos.left || '';
    miniMap.style.right = mapPos.right || '';
    miniMap.style.bottom = mapPos.bottom || '';
    miniMap.style.transform = mapPos.transform || '';

    // Aplicar la posición de los botones de ataque
    const attackPos = positions[attackButtonsPosition.value];
    attackButtons.style.top = attackPos.top || '';
    attackButtons.style.left = attackPos.left || '';
    attackButtons.style.right = attackPos.right || '';
    attackButtons.style.bottom = attackPos.bottom || '';
    attackButtons.style.transform = attackPos.transform || '';
}

// Agregar eventos a los menús desplegables
lifeBarPosition.addEventListener('change', updateHUD);
mapPosition.addEventListener('change', updateHUD);
attackButtonsPosition.addEventListener('change', updateHUD);

// Llamar a la función para inicializar
updateHUD();
