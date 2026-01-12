document.addEventListener('DOMContentLoaded', function() {
    // Elements for animation
    const header = document.querySelector('header');
    const contents = document.querySelectorAll('.content');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Initially hide all elements that will be animated
    header.style.opacity = '0';
    contents.forEach(content => content.style.opacity = '0');
    scrollIndicator.style.opacity = '0';

    // Sequence the animations
    setTimeout(() => {
        // Fade in header first
        header.style.transition = 'opacity 1s ease';
        header.style.opacity = '1';

        // After header, fade in first section content
        setTimeout(() => {
            contents[0].style.transition = 'opacity 1s ease, transform 1s ease';
            contents[0].style.opacity = '1';
            contents[0].style.transform = 'translate(-50%, -50%)';

            // Then fade in scroll indicator
            setTimeout(() => {
                scrollIndicator.style.transition = 'opacity 1s ease';
                scrollIndicator.style.opacity = '1';
            }, 500);
        }, 500);
    }, 200);

    // Add animation for subsequent sections when they come into view
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const content = entry.target.querySelector('.content');
                content.style.transition = 'opacity 1s ease, transform 1s ease';
                content.style.opacity = '1';
                content.style.transform = 'translate(-50%, -50%)';
            }
        });
    }, observerOptions);

    // Observe all sections except the first one (which is handled in the initial animation)
    const sections = document.querySelectorAll('.snap-section');
    sections.forEach((section, index) => {
        if (index !== 0) {
            observer.observe(section);
        }
    });
});