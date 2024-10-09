// Número de corações
const heartCount = 30;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posição inicial aleatória
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 5}s`;
    heart.style.opacity = Math.random() + 0.5;

    document.getElementById('hearts').appendChild(heart);

    // Remover coração depois de um tempo
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Criar corações constantemente
setInterval(createHeart, 500);
