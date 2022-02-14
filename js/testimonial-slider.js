$(document).ready(function() {
  // Testimonials Section GreenSock Animation Platform JS
  const clientReviewHomesplitTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#clientReviewHome",
      start: "top 75%",
      end: "bottom 0%",
      onToggle: self => gsap.to(".client-review-home", {opacity: self.isActive ? 1 : 0}),
      toggleActions: "restart pause restart none"
    }
  });
  const clientReviewHomesplit = new SplitText(".client-review-home");
  clientReviewHomesplitTimeline.from(clientReviewHomesplit.chars, {
    duration: 0.6,
    scale: 1,
    autoAlpha: 0,
    rotationX: -90,
    transformOrigin: "100% 50%",
    ease: "back",
    stagger: 0.075
  });
  // Testimonials Slider JS
  $(".slick-slider-testimonials-home").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
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
          slidesToShow: 1,
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
});