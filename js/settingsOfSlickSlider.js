$(document).ready(function() {
	//Plugin slick 
	$('.header-slider').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: false,
	  centerMode: true,
	  centerPadding: '0px',
	  swipeToSlide: true,
	  pauseOnHover: false,
	  autoplaySpeed: 2500,
	  responsive: [
		{
		  breakpoint: 1130,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			 centerMode: false
		  }
		},
		{
		  breakpoint: 850,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});
	
	//Arrows
	var sliderWrapper = $(".slider-wrapper");
	
	$(sliderWrapper).find("button").hide();
		$(sliderWrapper).hover(function(){
			$(sliderWrapper).find("button").show(400);
		},function(){
			$(sliderWrapper).find("button").hide(400);	
	});
	//End of slick	
});  

