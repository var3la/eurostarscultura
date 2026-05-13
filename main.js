document.addEventListener("DOMContentLoaded", (event) => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 1. Mobile Menu Toggle Logic
  const menuButton = document.querySelector(".menu-button");
  const navMenu = document.querySelector(".nav-menu");
  let isMenuOpen = false;

  if (menuButton && navMenu) {
    // Basic setup for the navMenu animation
    // Webflow hides the nav-menu on mobile by default using display: none inside media queries
    // We will use GSAP to toggle it.
    gsap.set(navMenu, { height: 0, overflow: "hidden", display: "none" });

    const menuTl = gsap.timeline({ paused: true });
    
    // Animate the hamburger icon into an X
    menuTl.to(".line-1", { y: 9, rotation: 45, duration: 0.3 }, 0);
    menuTl.to(".line-2", { opacity: 0, duration: 0.3 }, 0);
    menuTl.to(".line-3", { y: -9, rotation: -45, duration: 0.3 }, 0);

    // Animate the menu dropping down
    menuTl.to(navMenu, { display: "block", height: "auto", duration: 0.4, ease: "power2.inOut" }, 0);

    menuButton.addEventListener("click", () => {
      if (!isMenuOpen) {
        menuTl.play();
      } else {
        menuTl.reverse();
      }
      isMenuOpen = !isMenuOpen;
    });
  }

  // 2. Hero Animations
  const heroTl = gsap.timeline();
  
  heroTl.from(".hero-main-title-2", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
  });

  heroTl.from(".main-image", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
  }, "-=0.5");

  // 3. Scroll Fade-ins
  const fadeElements = document.querySelectorAll(".fade-in-wrapper-3, .service-detals-2, .text-block-7");
  fadeElements.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // when top of element hits 85% of viewport
        toggleActions: "play none none reverse"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  });

  // 4. Parallax Images
  const parallaxImages = document.querySelectorAll(".paralax-image-5");
  parallaxImages.forEach((img) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      yPercent: 15, // Move the image 15% downwards while scrolling
      ease: "none"
    });
  });
});
