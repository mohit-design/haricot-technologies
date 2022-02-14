$(function() {
  // About Us Section GreenSock Animation Platform JS
  const growBusinessAboutsplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#growBusinessAbout",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".grow-business-about", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const growBusinessAboutsplit = new SplitText(".grow-business-about");
  growBusinessAboutsplitTimeline.from(growBusinessAboutsplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
});