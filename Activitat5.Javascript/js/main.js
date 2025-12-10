// Dades dels jocs
const jocs = [
    {
        id: 'the-last-of-us',
        nom: 'The Last of Us',
        imatge: 'the-last-of-us.jpg',
        personatge: 'ellie.png'
    },
    {
        id: 'god-of-war',
        nom: 'God of War',
        imatge: 'god-of-war.jpg',
        personatge: 'kratos.png'
    },
    {
        id: 'cyberpunk-2077',
        nom: 'Cyberpunk 2077',
        imatge: 'cyberpunk2077.jpg',
        personatge: 'v.png'
    },
    {
        id: 'elden-ring',
        nom: 'Elden Ring',
        imatge: 'elden-ring.jpg',
        personatge: 'tarnished.png'
    },
    {
        id: 'zelda-totk',
        nom: 'Tears of the Kingdom',
        imatge: 'zelda-tears.jpg',
        personatge: 'link.png'
    },
    {
        id: 'minecraft',
        nom: 'Minecraft',
        imatge: 'minecraft.jpg',
        personatge: 'steve.png'
    }
];

// Generar la galeria
document.addEventListener('DOMContentLoaded', () => {
    const galeria = document.getElementById('galeria-jocs');
    
    jocs.forEach(joc => {
        const div = document.createElement('div');
        div.className = 'tarjeta-juego';
        div.innerHTML = `
            <img src="img/${joc.imatge}" alt="${joc.nom}">
            <div class="personaje-overlay" id="overlay-${joc.id}">
                <img src="img/personajes/${joc.personatge}" alt="Personatge">
            </div>
        `;
        div.addEventListener('click', () => mostrarPersonajeYRedirigir(joc.id));
        galeria.appendChild(div);
    });
});

// Funció animada
function mostrarPersonajeYRedirigir(idJoc) {
    const overlay = document.getElementById(`overlay-${idJoc}`);
    
    // Mostrar overlay amb animació
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    
    // Redirigir després de la transició
    setTimeout(() => {
        window.location.href = `juegos/${idJoc}.html`;
    }, 800); // coincidir amb la durada de l'animació
}

