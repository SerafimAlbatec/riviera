    /////////* TABS *///////////
    $(document).ready(function() {
        "use strict";
        $("body").find("#content-tab-content div").hide();
        $("body").find("#content-tabs li:first").attr("id", "current");
        $("body").find("#content-tab-content div:first").fadeIn();

        $("body").find('#content-tabs a').on("click", function(e) {
            e.preventDefault();
            $("body").find("#content-tab-content div").hide();
            $("body").find("#content-tabs li").attr("id", "");
            $(this).parent().attr("id", "current");
            $('#' + $(this).attr('title')).fadeIn();
        });
    });