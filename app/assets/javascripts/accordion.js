    /////////* ACCORDION */////////// 
    $(document).ready(function() {
        "use strict";
        setTimeout(function() {
            $('.accordion-header').toggleClass('inactive-header');

            var contentwidth = $('.accordion-header').width();
            $('.accordion-content').css({
                'width': contentwidth
            });

            $('.accordion-header').click(function() {
                if ($(this).is('.inactive-header')) {
                    $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
                    $(this).toggleClass('active-header').toggleClass('inactive-header');
                    $(this).next().slideToggle().toggleClass('open-content');
                } else {
                    $(this).toggleClass('active-header').toggleClass('inactive-header');
                    $(this).next().slideToggle().toggleClass('open-content');
                }
            });

            return false;

        }, 1200);
    });