$(document).ready(function() {
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
  // Desktop Logo and Navigationbar Menu Section JS
	var lastScrollTop = 0,
		  offsetTopMenu = 0;
	$(window).scroll(function (event) {
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= offsetTopMenu)
			return;
		if (st > lastScrollTop) {
			// Down Scroll code
			$(".bg-logo-navbar-menu-desktop, .bg-header-mobile").css({
				"top":"-85px",
				"box-shadow":"none"
			});
		} else {
			// Up Scroll code
			$(".bg-logo-navbar-menu-desktop, .bg-header-mobile").css({
				"top": "0",
				"box-shadow": "0px 10px 13px -7px #00000020, 5px 5px 15px 5px rgba(0,0,0,0)"
			});
		}
		lastScrollTop = st;
	});
	// Mobile Menu JS
	$(".burger-menu").click(function() {
		$(".fixed-navbar-menu-mobile").toggleClass("active");
		$(".menu-listing-mobile").toggleClass("active");
		$("body").toggleClass("active");
		$(".bg-blur").toggleClass("active");
	});
	// Mobile Menu Listing JS
  $(".menu-listing-mobile > li > a").click(function() {
    $(".menu-listing-mobile > li > a").parent().removeClass("active");
    $(this).parent().addClass("active");
    $(this).next().slideToggle();
  });
});
// Disabled "Ctrl" and "Ctrl + Shift" Keys JS
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
      return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
  }
});
// Disabled Right Click JS
// window.oncontextmenu = function () {
//   return false;
// }
// Disabled Ctrl + U and Ctrl + C JS
$(document).keydown(function(event) {
	var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
	if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
	return false;
	}
});
// Window Loader JS
;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());