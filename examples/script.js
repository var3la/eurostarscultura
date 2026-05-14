gsap.registerPlugin(SplitText, ScrollTrigger);

window.addEventListener("load", function () {
  
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });


  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1 });

});

  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.refresh();
});