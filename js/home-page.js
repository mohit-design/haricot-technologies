$(document).ready(function() {
	// On Scroll "About Us" Logo Pattern Rellax Animation JS
  var servicesLogoPatternHome = new Rellax(".services-logo-pattern-home", {
    speed: 3,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
  // Blog Slick Slider JS
  $(".slick-slider-blog-home").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // About Us Section GreenSock Animation Platform JS
  const digitalSupportHomesplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#digitalSupportHome",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".digital-support-home", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const digitalSupportHomesplit = new SplitText(".digital-support-home");
  digitalSupportHomesplitTimeline.from(digitalSupportHomesplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
  // Services Section GreenSock Animation Platform JS
  const featuredServicesHomesplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#featuredServicesHome",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".featured-services-home", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const featuredServicesHomesplit = new SplitText(".featured-services-home");
  featuredServicesHomesplitTimeline.from(featuredServicesHomesplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.05
  });
  // Our Blog Section GreenSock Animation Platform JS
  const ourBlogHomesplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#ourBlogHome",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".our-blog-home", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const ourBlogHomesplit = new SplitText(".our-blog-home");
  ourBlogHomesplitTimeline.from(ourBlogHomesplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.075
  });
  // Our Client Section GreenSock Animation Platform JS
  const ourClientHomesplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#ourClientHome",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".our-client-home", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const ourClientHomesplit = new SplitText(".our-client-home");
  ourClientHomesplitTimeline.from(ourClientHomesplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.075
  });
});