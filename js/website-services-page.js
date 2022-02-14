$(function() {
  // Services Section GreenSock Animation Platform JS
  const featuredServicessplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#featuredServicesAbout",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".featured-services", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const featuredServicessplit = new SplitText(".featured-services");
  featuredServicessplitTimeline.from(featuredServicessplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
  // Services Process Section GreenSock Animation Platform JS
  const servicesProcessSplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#servicesProcess",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".services-process", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const servicesProcessSplit = new SplitText(".services-process");
  servicesProcessSplitTimeline.from(servicesProcessSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.10
  });
  // Why Choose Services Section GreenSock Animation Platform JS
  const whyChooseServicesSplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#whyChooseServices",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".why-choose-services", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const whyChooseServicesSplit = new SplitText(".why-choose-services");
  whyChooseServicesSplitTimeline.from(whyChooseServicesSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.10
  });
  // Technology We Use Section GreenSock Animation Platform JS
  const technologyWeUseSplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#technologyWeUse",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".technology-we-use", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const technologyWeUseSplit = new SplitText(".technology-we-use");
  technologyWeUseSplitTimeline.from(technologyWeUseSplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.10
  });
});