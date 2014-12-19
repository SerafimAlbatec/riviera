    $(document).ready(function() {
        "use strict";
      if ($(window).width() > 800) {  
        setTimeout(function() {
            $("#page-box").find(".wrap").fadeIn();
        }, 1200);
      }
        else
        {
            $("#page-box").find(".wrap").fadeIn();
        }
    });