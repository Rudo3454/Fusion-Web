function scrollVideos(direction) {
    const videos = document.querySelectorAll('.video-item');
    if (videos.length === 0) return;

    const prevIndex = currentIndex;
    
    // 1. Marcamos el video actual para que haga la animación de "salida"
    videos[prevIndex].classList.add('exit');
    videos[prevIndex].classList.remove('active');

    // 2. Calculamos el siguiente índice
    currentIndex = (currentIndex + direction + videos.length) % videos.length;

    // 3. Activamos el nuevo video
    // Quitamos cualquier rastro de 'exit' por si acaso
    videos[currentIndex].classList.remove('exit');
    videos[currentIndex].classList.add('active');

    // 4. Limpieza: Después de que termine la animación, quitamos la clase 'exit'
    setTimeout(() => {
        videos[prevIndex].classList.remove('exit');
    }, 700); // Mismo tiempo que el transition en CSS

    // Pausar audio de los que no están activos
    videos.forEach((item, index) => {
        const v = item.querySelector('video');
        if (v && index !== currentIndex) v.pause();
    });
}