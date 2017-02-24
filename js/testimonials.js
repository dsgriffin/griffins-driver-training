	// Hide all images in the slideshow initially, except the first.
	$('.testimonial-slide:gt(0)').hide();
	// Cache original height + set so content below isn't disrupted (responsive design so don't wanna mess around with absolute)
	var containerHeight = $(".testimonial-slide").eq(0).height();
	$('#testimonial-slideshow').height(containerHeight);
	// Every 9 seconds, fade out the currently displayed image, fade in the next one and add the previous one back into the loop.
	setInterval(function(){
		$(".testimonial-slide:first-child").fadeOut("slow", function() {
			$(this).next('.testimonial-slide').fadeIn("slow").end().appendTo('#testimonial-slideshow');
		});
	}, 10000);