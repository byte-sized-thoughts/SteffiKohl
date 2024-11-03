// Smooth scroll functionality for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Parallax effect
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;

    // Elements that scroll at different speeds
    document.querySelector('.graphic-boxes').style.setProperty('--parallax-offset-boxes', `${scrolled * 0.3}px`);
    document.querySelector('.circle-left').style.setProperty('--parallax-offset-circle-left', `${scrolled * 0.5}px`);
    document.querySelector('.circle-right').style.setProperty('--parallax-offset-circle-right', `${scrolled * 0.7}px`);

    // Steffi's photo and title/subtitle scroll at the normal speed (no adjustments needed)
});