// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // More specific selector targeting any container with class 'logo'
    const logoWrapper = document.querySelector('.logo');
    const SCROLL_THRESHOLD = window.innerWidth <= 768 ? 50 : 100;

    // Function to handle logo state
    const updateLogoState = () => {
        if (!logoWrapper) return; // Guard clause if logo not found
        
        if (window.scrollY > SCROLL_THRESHOLD) {
            logoWrapper.classList.add('scrolled');
        } else {
            logoWrapper.classList.remove('scrolled');
        }
    };

    // Add scroll event listener with debounce for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            updateLogoState();
        });
    });

    // Update threshold on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (resizeTimeout) {
            window.cancelAnimationFrame(resizeTimeout);
        }
        resizeTimeout = window.requestAnimationFrame(() => {
            SCROLL_THRESHOLD = window.innerWidth <= 768 ? 50 : 100;
            updateLogoState();
        });
    });

    // Initial check
    updateLogoState();
});