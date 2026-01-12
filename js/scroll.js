document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.scroll-indicator .dot');
    const sections = document.querySelectorAll('.snap-section');

    // Function to get current section
    const getCurrentSection = () => {
        const scrollPosition = window.scrollY + (window.innerHeight / 2);
        
        let currentSection = 0;
        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop) {
                currentSection = index;
            }
        });
        
        return currentSection;
    };

    // Update dots on scroll
    window.addEventListener('scroll', () => {
        const currentSection = getCurrentSection();
        
        dots.forEach((dot, index) => {
            if (index === currentSection) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });

    // Click handlers for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update dots on page load
    const currentSection = getCurrentSection();
    dots[currentSection].classList.add('active');
});

// For logo change on scroll (keeping this part)
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    if (window.scrollY > 50) {
        logo.classList.add('scrolled');
    } else {
        logo.classList.remove('scrolled');
    }
});