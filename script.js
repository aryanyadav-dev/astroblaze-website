document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".hero h1", {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(".hero p", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.3
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute('href'); 
            gsap.to(window, { 
                duration: 1.5, 
                scrollTo: targetId, 
                ease: "power3.out" 
            });
        });
    });

    gsap.from(".vision-content", {
      scrollTrigger: "#vision",
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    });

    gsap.from(".project", {
      scrollTrigger: "#projects",
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: "power3.out"
    });

    gsap.from("form", {
      scrollTrigger: "#contact",
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    });
});
