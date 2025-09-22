 const images = document.querySelectorAll('.img-gallery img');

    images.forEach(img => {
      img.addEventListener('click', () => {
        const isZoomed = img.classList.contains('zoomed');

        // Remove zoom from all images
        images.forEach(i => i.classList.remove('zoomed'));

        // Toggle zoom only if it wasn't already zoomed
        if (!isZoomed) {
          img.classList.add('zoomed');
        }
      });
    });