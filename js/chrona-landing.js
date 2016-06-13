$(function() {

    var bgImages, current, backgrounds, whiteOverlay, range;
    bgImages = $(".bg-images");
    backgrounds = ["url('../img/bg_landing_bedroom.jpg')","url('../img/bg_landing_hospital.jpg')", "url('../img/bg_landing_hotel-male.jpg')", "url('../img/bg_landing_hotel-couple.jpg')"];
    current = 0;

    function nextBackground() {
        bgImages.css( "background-image", backgrounds[current = ++current % backgrounds.length] );
        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);


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

    bgImages.css( "background-image", backgrounds[0] );

});