document.querySelectorAll('.team-grid img').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        
        // Calcul mta' position el mouse b nisba lel taswira
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        // Rotation 3D (Level VIP)
        const tiltX = y * 30; // 30 degres rotation
        const tiltY = x * -30;

        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.1, 1.1, 1.1)`;
        
        // Zid dhow (Flare) yemchi m3a el mouse
        card.style.filter = `brightness(1.2) contrast(1.1) drop-shadow(0 0 20px rgba(0, 210, 255, 0.5))`;
    });

    card.addEventListener('mouseleave', () => {
        // Traja3 kol chay kima ken
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.filter = `grayscale(30%) brightness(1)`;
    });
});

// Animation d'entrée VIP (Scroll Reveal)
const sections = document.querySelectorAll('.dept');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(s => {
    s.style.opacity = "0";
    s.style.transform = "translateY(50px)";
    s.style.transition = "all 0.8s ease-out";
    observer.observe(s);
});