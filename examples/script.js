gsap.registerPlugin(SplitText, ScrollTrigger);

window.addEventListener("load", function () {
/*  
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
*/
let split = SplitText.create(".content h1", { type: "chars" });

gsap.from(split.chars, {
  x: 20,
  yPercent: -50,
  opacity: 0,
  stagger: 0.05
});

gsap.set("h1", { opacity: 1 });
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