$(document).ready(function() {
	$('.jd-listing > li > a').click(function(event){
		event.preventDefault(); // stop browser to take action for clicked anchor
		// get displaying tab content jQuery selector
		var active_tab_selector = $('.jd-listing > li.active > a').attr('href');
		// find actived navigation and remove 'active' css
		var actived_nav = $('.jd-listing > li.active');
		actived_nav.removeClass('active');
		// add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
		// hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
		// show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	});
	// Apply Form JS
	// $(".bg-apply-cap").slideUp(700);
	// $(".apply-read-view-more > a").click(function(event) {
	// 	event.preventDefault();
	// 	$(".bg-apply-cap").slideToggle(700);
	// });
	// Custom Input File JS
	$("#FileInput").on('change',function (e) {
		var labelVal = $(".title").text();
		var oldfileName = $(this).val();
		  fileName = e.target.value.split( '\\' ).pop();
		  if (oldfileName == fileName) {return false;}
		  var extension = fileName.split('.').pop();
		// if ($.inArray(extension,['jpg','jpeg','png']) >= 0) {
		//   $(".filelabel i").removeClass().addClass('fas fa-file-image');
		//   $(".filelabel i, .filelabel .title").css({'color':'#01b1ff'});
		//   $(".filelabel").css({'border':' 2px solid #01b1ff'});
		// }
		if(extension == 'pdf'){
		  $(".filelabel i").removeClass().addClass('fas fa-file-pdf');
		  $(".filelabel i, .filelabel .title").css({'color':'#01b1ff'});
		  $(".filelabel").css({'border':' 2px solid #01b1ff'});
		} else if(extension == 'doc' || extension == 'docx') {
		  $(".filelabel i").removeClass().addClass('fas fa-file-word');
		  $(".filelabel i, .filelabel .title").css({'color':'#01b1ff'});
		  $(".filelabel").css({'border':' 2px solid #01b1ff'});
		} else {
	    $(".filelabel i").removeClass().addClass('fas fa-file');
	    $(".filelabel i, .filelabel .title").css({'color':'#01b1ff'});
	    $(".filelabel").css({'border':' 2px solid #01b1ff'});
		}
		if(fileName) {
      if (fileName.length > 10){
        $(".filelabel .title").text(fileName);
      } else {
        $(".filelabel .title").text(fileName);
      }
	  } else {
      $(".filelabel .title").text(labelVal);
	  }
	});
	// Popup - 1 JS
 	$(".apply-read-view-more > a").click(function(event) {
 		event.preventDefault();
		$("body").addClass("active");
		$(".bg-blur").addClass("active");
		$(".box-popup-1").addClass("active");
  });
  $(".bg-popup-close-1").click(function(event) {
  	event.preventDefault();
    $("body").removeClass("active");
    $(".bg-blur").removeClass("active");
    $(".box-popup-1").removeClass("active");
  });
});