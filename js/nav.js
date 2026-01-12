document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('[data-nav-toggle]');
    const closeBtn = document.querySelector('.close-nav');
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.nav-overlay');
    const mainContent = document.querySelector('.main-content');
    
    function openNav() {
        sideNav.classList.add('active');
        overlay.classList.add('active');
        mainContent.classList.add('nav-active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeNav() {
        sideNav.classList.remove('active');
        overlay.classList.remove('active');
        mainContent.classList.remove('nav-active');
        document.body.style.overflow = '';
    }
    
    menuBtn.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);
    overlay.addEventListener('click', closeNav);
    
    // Close nav with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideNav.classList.contains('active')) {
            closeNav();
        }
    });

    // Prevent body scroll when nav is open
    sideNav.addEventListener('touchmove', function(e) {
        if (this.scrollHeight <= this.clientHeight) {
            e.preventDefault();
        }
    }, { passive: false });
});