document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateCarousel(direction) {
        // 1. Quitar clases al actual y pausar video
        const currentVideo = videos[currentIndex].querySelector('video');
        if (currentVideo) currentVideo.pause();
        videos[currentIndex].classList.remove('active');

        // 2. Calcular nuevo índice
        currentIndex = (currentIndex + direction + videos.length) % videos.length;

        // 3. Activar nuevo video y darle PLAY
        videos[currentIndex].classList.add('active');
        const nextVideo = videos[currentIndex].querySelector('video');
        if (nextVideo) {
            nextVideo.play().catch(error => console.log("Auto-play bloqueado por el navegador"));
        }
    }

    // Escuchar los clics
    nextBtn.addEventListener('click', () => updateCarousel(1));
    prevBtn.addEventListener('click', () => updateCarousel(-1));

    // Hacer que el video central se reproduzca al dar clic directamente sobre él
    videos.forEach(item => {
        item.addEventListener('click', () => {
            const v = item.querySelector('video');
            if (v.paused) v.play();
            else v.pause();
        });
    });
});
