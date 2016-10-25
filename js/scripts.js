$(document).ready(function() {
	
	
	/*Start of text show for big front image*/
	var slideBg = $(".slide-bg");
	var textShow = $("#textShow");
	var linkShow = $("#linkShow");

	$(textShow).css("left", "-40%");
	$(linkShow).css("left", "100%");
	
	$(slideBg).hover(function(){
		$(textShow).stop().animate({
			"left": "40%"
		}, 800);
		$(linkShow).stop().animate({
			"left": "48%"
		}, 800);	
	},
	function(){
		$(textShow).stop().animate({
			"left": "-80%"
		}, 500);
		$(linkShow).stop().animate({
			"left": "150%"
		}, 500);	
	});
	/*End of text show for big front image*/
	

	
	
});