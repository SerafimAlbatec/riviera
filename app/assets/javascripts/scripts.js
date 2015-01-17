"use strict";

/* DROP MENU */
$('.ul-drop > li').click(function(){
    $(this).children('ul').toggle({display: "toggle"});
});

$('.menu-drop > a').click(function(){
    $(this).parents('div').children('.ul-drop').toggle({display: "toggle"});
});

/* Scroll To Top
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */
$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

/* Home
/* ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## */
function InitHome(){

    // Hide, While Loading
    $(window).load(function(){
        $('#load-hide').animate({opacity:'1'});
        $('#load-logo').css('display','none');
    });

    // Slider
    $('.slider').flexslider({
        animation: "fade",
        controlNav: false,
        prevText: "",
        nextText: "",
        start: function(){
            $('.slider .box,.slider .shadow').removeClass('slideUp');
            $('.slider .flex-active-slide .box,.slider  .flex-active-slide .shadow').addClass('slideUp');
        },
        after: function(){
            $('.slider .box,.slider .shadow').removeClass('slideUp');
            $('.slider .flex-active-slide .box,.slider .flex-active-slide .shadow').addClass('slideUp');
        },
        useCSS: false
    });


        var serv = $('.our-services .content .circle .img');
        $(window).scroll(function()
        {
            var offset = serv.offset().top;
            var topOfWindow = $(window).scrollTop();

            if (offset < topOfWindow + 500)
            {
                serv.addClass('fadeIn');
            }
        });



        var team = $('.our-team .content .circle img');
        $(window).scroll(function()
        {
            var offset = team.offset.top;
            var topOfWindow = $(window).scrollTop();

            if (offset < topOfWindow + 500)
            {
                team.addClass('fadeIn');
            }
        });

    // Window Descriptor
    var $window = $(window);

    // Parallax Slider
    $('.slider .slides > li').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function()
        {
            var yPos = -($window.scrollTop() / 10 );
            var coords = '50% '+ yPos + 'px';
            $bgobj.css({ backgroundPosition:  coords });
        });
    });


    // Parallax Section
    $('section').each(function(){
        var $obj = $(this);
        var offset = $obj.offset().top;
        $(window).scroll(function()
        {
            if ($window.scrollTop() > offset - window.innerHeight )
            {
                var yPos = -(($window.scrollTop() - offset) / 5 );
                var coords = '50% ' + ( yPos ) + 'px';
                $obj.css({ backgroundPosition:  coords });
            }
        });
        $(window).resize(function()
        {
            offset = $obj.offset().top;
        });
    });



    // Events Slider
    $('.events').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
        useCSS: false
    });

}

function InitAbout(){
    var team = $('.our-team .content .circle img');
    team.addClass('fadeIn');
}

function InitDefault(){
    // Window Descriptor
    var $window = $(window);

    // Parallax Top
    var $obj = $('.header-back');
    var offset = $obj.offset().top;
    $(window).scroll(function()
    {
        if ($window.scrollTop() > offset - window.innerHeight )
        {
            var yPos = -(($window.scrollTop()) / 5 );
            var coords = '50% ' + ( yPos ) + 'px';
            $obj.css({ backgroundPosition:  coords });
        }
    });

    // Parallax Section
    $('section').each(function(){
        var $obj = $(this);
        var offset = $obj.offset().top;
        $(window).scroll(function()
        {
            if ($window.scrollTop() > offset - window.innerHeight )
            {
                var yPos = -(($window.scrollTop() - offset) / 5 );
                var coords = '50% ' + ( yPos ) + 'px';
                $obj.css({ backgroundPosition:  coords });
            }
        });
        $(window).resize(function()
        {
            offset = $obj.offset().top;
        });
    });
}

function InitOpenMenu(){
    // Slider
    $('.menu-slider').flexslider({
        animation: "slide",
        directionNav: false,
        useCSS: false
    });
}

function InitOpenGallery(){
    // Slider
    $('.gallery-slider').flexslider({
        animation: "slide",
        useCSS: false,
        nextText: "",
        prevText: ""
    });
}

function InitStoryOpen(){
    // Slider
    $('.story-slider').flexslider({
        animation: "slide",
        useCSS: false,
        directionNav: false
    });
}