gsap.registerPlugin(SplitText, ScrollTrigger);

window.addEventListener("load", function () {
  
  let wrapper = document.querySelector(".container");
  let text = document.querySelector(".Horizontal__text");
  let split = SplitText.create(".Horizontal__text", { type: "chars, words" });

  const scrollTween = gsap.to(text, {
    xPercent: -1000,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      pin: true,
      end: "+=5000px",
      scrub: true
    }
  });

split.chars.forEach((char) => {
  gsap.from(char, {
    yPercent: "random(-200, 200)",
    rotation: "random(-20, 20)",
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: char,
      containerAnimation: scrollTween,
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });
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