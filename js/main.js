// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const filters = document.querySelectorAll('.filter');
    const galleryItems = document.querySelectorAll('.gallery-grid img');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove('active'));
            // Add active class to the clicked filter
            filter.classList.add('active');

            const filterValue = filter.textContent.toLowerCase();
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.alt.toLowerCase().includes(filterValue)) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transition = 'opacity 0.5s ease-in-out';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });

    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.classList.add('fullscreen-overlay');
    document.body.appendChild(fullscreenOverlay);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullImage = document.createElement('img');
            fullImage.src = item.src;
            fullscreenOverlay.innerHTML = '';
            fullscreenOverlay.appendChild(fullImage);
            fullscreenOverlay.style.display = 'flex';
        });
    });

    fullscreenOverlay.addEventListener('click', () => {
        fullscreenOverlay.style.display = 'none';
    });
});

// Add your JavaScript functions and event handlers here
