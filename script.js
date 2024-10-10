// Número de corações
const heartCount = 10;

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
    }, 1500);
}

// Criar corações constantemente
setInterval(createHeart, 500);


let currentPage = 1;
const totalPages = 8; // Número de páginas

function showPage(page) {
    // Oculta todas as páginas
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById('page-' + i).classList.remove('active');
    }
    // Mostra a página selecionada
    document.getElementById('page-' + page).classList.add('active');
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}


// Exibe a primeira página ao carregar
showPage(currentPage);
