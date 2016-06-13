$(function() {

    var bgImages, bgTimer, current, backgrounds, soloBackground, whiteOverlay;
    bgImages = $(".bg-images");
    backgrounds = ["url('../img/bg_landing_bedroom.jpg')","url('../img/bg_landing_hospital.jpg')", "url('../img/bg_landing_hotel-male.jpg')", "url('../img/bg_landing_hotel-couple.jpg')"];
    soloBackground = ["url('../img/bg_landing_bedroom.jpg')"];
    current = 0;

    function nextBackground() {
        bgImages.css( "background-image", backgrounds[current = ++current % backgrounds.length] );
        bgTimer = setTimeout(nextBackground, 5000);
    }

    bgImages.css( "background-image", backgrounds[0] );

    whiteOverlay = $(".white-overlay");

    $(window).on('scroll', function () {

        var offset = whiteOverlay.offset().top;
        var calc = offset / 200;

        whiteOverlay.css({ 'opacity': calc });

        if ( calc > '.85' ) {
            whiteOverlay.css({ 'opacity':.85 });
        } else if ( calc < '0' ) {
            whiteOverlay.css({ 'opacity': 0 });
        }

    });

    /*! ^#--Header Resizing Stuff */
    var lastWinWidth = $(window).width();
    var lastWinHeight = $(window).height();

    $(window).resize(function() {

        var curWinWidth = $(window).width();
        var curWinHeight = $(window).height();


        //if we went from desktop to mobile, close the slide out menu
        if (lastWinWidth > 960 && curWinWidth <= 960) {
            clearTimeout(bgTimer);
        }

        //if we went from mobile to desktop, close the slide out menu
        if (lastWinWidth <= 960 && curWinWidth > 960) {
            setTimeout(nextBackground, 5000);
        }

        lastWinHeight = curWinHeight;
        lastWinWidth = curWinWidth;

    });
    // End Header Resizing Stuff

    if (lastWinWidth > 960) {
        //bgImages.css( "background-image", soloBackground[current = ++current % backgrounds.length] );
        setTimeout(nextBackground, 5000);
    }



});