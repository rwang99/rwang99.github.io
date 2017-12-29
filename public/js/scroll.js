$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 300);
  });

  $(document).ready(function(){
  	// Get height of header
  	var headerHeight = $('.navbar-fixed-top').outerHeight();

	$('.smooth').click(function(e){
		
		var linkHref = $(this).attr('href');	// Grabs the link

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 1000); 

		e.preventDefault();			// Prevents automatic switching
	});
});
});



