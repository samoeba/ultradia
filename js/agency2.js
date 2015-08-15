/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -75
        }, 1800, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy ({
    offset: 160
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('#coverimageforplayer').click(function() {
        var embedCode = '<iframe width="853" height="480" src="https://www.youtube.com/embed/WXYeOvggz1w?autoplay=1&rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
        $('#coverimageforplayer').html(embedCode);
    });

$('#coverimageforplayer-2').click(function() {
        var embedCode2 = '<iframe width="853" height="480" src="https://www.youtube.com/embed/ULeS8J4pphk?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
        $('#coverimageforplayer-2').html(embedCode2);
    });