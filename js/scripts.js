$(document).ready(function() {
	
/*Start of main page*/	
	/*Start of text show for big front image*/
	
	
	var slideBg = $(".slide-bg");
	var textShow = $("#textShow");
	var linkShow = $("#linkShow");

	
	
	function slideData() {
		var positionOfText;
		var positionOfLink;	
		linkShow.css("top", "57%");
		textShow.css("top", "50%");
		
		var $width = $(window).width();
		
		if($width >= 1600) {
			positionOfText = "40%";
			positionOfLink = "48%";
		}if($width <= 1550) {
			positionOfText = "35%";
			positionOfLink = "44%";
		}if($width <= 1230) {
			positionOfText = "31%";
			positionOfLink = "43%";
		}if($width <= 980) {
			positionOfText = "27%";
			positionOfLink = "43%";
		}if($width <= 800) {
			positionOfText = "18%";
			positionOfLink = "37%";
		}if($width <= 740) {
			positionOfText = "13%";
			positionOfLink = "35%";
		}if($width <= 640) {
			positionOfText = "9%";
			positionOfLink = "34%";
		}if($width <= 570) {
			positionOfText = "9%";
			positionOfLink = "32%";
			linkShow.css("top", "65%");
		}if($width <= 500) {
			positionOfText = "8%";
			positionOfLink = "24%";
		}
		if($width <= 380) {
			positionOfText = "8%";
			textShow.css("top", "35%");
			positionOfLink = "18%";
		}
		
	return [positionOfText, positionOfLink];	
		
	}
	
	slideData();
	
	var moveText = "-200%";
	var moveLink = "200%";
	
	$(textShow).css("left", moveText);
	$(linkShow).css("left", moveLink);
	
	$(slideBg).hover(function(){
		
		$(textShow).stop().animate({
			"left": slideData()[0]
		}, 1000);
		$(linkShow).stop().animate({
			"left": slideData()[1]
		}, 1000);	
	},
	function(){
		$(textShow).stop().animate({
			"left": moveText
		}, 700);
		$(linkShow).stop().animate({
			"left": moveLink
		}, 700);	
	});
	/*End of text show for big front image*/
	
/*End of main page*/	



/*Start of products page*/	

var product = $(".product");
var learnMore = $(".learnMore");

$(learnMore).hide();

	$(product).hover(function(){
		$(this).find(learnMore).stop().slideDown(700);
	},
	function(){
		$(learnMore).stop().stop().slideUp(400);
	});
	


/*End of products page*/


/*Start of productsNamesPages*/	

var services = $(".services").find("div");
var moreInfo = $(".moreInfo");

$(moreInfo).hide();

	$(services).hover(function(){
		$(this).find(moreInfo).stop().show(700);
	},
	function(){
		$(moreInfo).stop().stop().hide(700);
	});
	


/*End of productsNamesPages*/


/*
$( window ).resize(function() {
	var $width = $(window).width();
	console.log($width);
});
	*/
});