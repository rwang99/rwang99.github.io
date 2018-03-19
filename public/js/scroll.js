$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
    	$nav.toggleClass('scrolled', $(this).scrollTop() > 300);	//Gives solid background to navbar after 300px
		
		var $down = $(".down-arrow");
		$down.toggleClass('scrolled', $(this).scrollTop() > 10);

    });


	$(document).ready(function(){
  	// Get height of header
  	var headerHeight = $('.navbar-fixed-top').outerHeight();

  	$('.smooth').click(function(e){
		var linkHref = $(this).attr('href');	// Grabs the link
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 1000); 

		window.location.hash = linkHref;		// Updates url
		e.preventDefault();			// Prevents automatic switching
	});



  });

});



