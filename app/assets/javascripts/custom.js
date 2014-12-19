/* AUDIO PLAYER */
//= require social-share-button

$(document).ready(function() {
    "use strict";
 $("body").find('.sidebaraudio').audioPlayer();
});

/* AJAX PAGE LOADING */
$("body").find("nav ul li a").click(function (event){ 
    "use strict";
    var $clickedElement = $(event.target);
    var currentId = $clickedElement.attr('href');
    $("#right-column").find("#page-box").removeClass('fadeInDownBig').addClass('fadeOutRightBig');
    setTimeout(function () {$("body").find('#right-column').html("").load(currentId + '.html');},400);
    setTimeout(function () { $("body").find("#close").fadeIn(); },1000);
  return false;
});

$("body").find("#close").click(function (){ 
  "use strict";
  $("body").find("#close").hide();
  $("body").find("#right-column").find("#page-box").removeClass('fadeInDownBig').addClass('fadeOutRightBig');
  setTimeout(function () { $("body").find('#right-column').html(""); },1000);
  return false;    
}); 

/* BACKGROUND SLIDER SETTINGS */

$(document).ready(function() {
    "use strict";
    $.vegas('slideshow', {
        backgrounds: [
			{ src: 'assets/slide_background/slide1.jpg', fade: 100 },
			{ src: 'assets/slide_background/slide2.jpg', fade: 100 },
			{ src: 'assets/slide_background/slide3.jpg', fade: 100 }
		],
             delay: 7000 
    })('overlay');
});

/* MAIN MENU */

$(document).ready(function() {
    "use strict";
	$("nav ul li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		}
	});
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$("nav ul").slideToggle(200);
	});
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$("nav ul").hide();
		} else {
			$("nav ul").show();
		}
		$("nav ul li").unbind('mouseenter mouseleave');
		$("nav ul li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
});

/* CAROUSEL */

$(document).ready(function(){
    "use strict";
    $('.bxslider').bxSlider({
    pager: false,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: 'Next →',
    prevText: '← Prev'
});
});