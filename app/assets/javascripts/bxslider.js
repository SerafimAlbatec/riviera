/* Fullwidth Slider */

$(document).ready(function() {
    "use strict";
     setTimeout(function () { 
       $('.fullwidth-slider').bxSlider({
       auto: true,
       autoControls: true
   });
        },1200);
}); 

/* Video Slider */

    $(document).ready(function() {
        "use strict";
        setTimeout(function() {
            $('.video-slider').bxSlider({
                video: true,
                useCSS: false
            });
        }, 1200);
    });

/* Carousel */

$(document).ready(function(){
    "use strict";
       setTimeout(function() {
          $('.carousel').bxSlider({
            slideWidth: 200,
            minSlides: 1,
            maxSlides: 5,
            slideMargin: 10
  });
      }, 1200);
});