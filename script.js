// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Text Reveal
gsap.from(".title h1", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
});

// 2. Floating Image Entrance
gsap.from(".title img", {
    scale: 0.8,
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: "expo.out"
});

// 3. Image Hover 3D (Mouse Move)
const img = document.querySelector('.title img');
document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    gsap.to(img, {
        rotationY: x,
        rotationX: -y,
        ease: "power2.out",
        duration: 0.5
    });
});

// 4. Cards Reveal on Scroll
gsap.from(".img-box", {
    scrollTrigger: {
        trigger: ".q",
        start: "top 80%",
    },
    y: 60,
    opacity: 0,
    stagger: 0.2, // bch yatl3ou ka3ba wra ka3ba
    duration: 1,
    ease: "power3.out"
});