$(function() {

    var slides, navDots, delta, scrollThreshold, currentSlideIndex, numSlides;
    slides = $(".slide");
    navDots = $(".dot");
    currentSlideIndex = 0;
    numSlides = 1;
    scrollThreshold = 40;
    delta = 0;




    function slideScroll (e) {

        // --- Scrolling up ---
        if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {

            delta--;

            if ( Math.abs(delta) >= scrollThreshold) {
                prevSlide();
            }
        }

        // --- Scrolling down ---
        else {

            delta++;

            if (delta >= scrollThreshold) {
                nextSlide();
            }
        }

        // Prevent page from scrolling
        return false;
    }

    //Show Slide Transition
    function showSlide() {

        // reset
        delta = 0;

        slides.each(function(i) {
            if (i < currentSlideIndex) {
                $(this).addClass("hide-slide");
            }
            if ($(this).hasClass("hide-slide") && i === currentSlideIndex){
                $(this).removeClass("hide-slide");
            }
            if (i > currentSlideIndex) {
                $(this).removeClass("hide-slide");
            }
        });



        //slides.each(function(i, slide) {
        //    $(slide).toggleClass('current-slide', (i === currentSlideIndex));
        //    //console.log(i + " (INDEX)  |  " + currentSlideIndex + " (CURRENT SLIDE)")
        //});

    }

    //Previous Slide
    function prevSlide() {

        currentSlideIndex--;

        if (currentSlideIndex < 0) {
            currentSlideIndex = 0;
        }

        showSlide();
        changeNavDots();
    }

    //Next Slide
    function nextSlide() {

        currentSlideIndex++;

        if (currentSlideIndex > numSlides) {
            currentSlideIndex = numSlides;
        }

        showSlide();
        changeNavDots();
    }

    // Nav Dots
    function changeNavDots() {

        navDots.each(function(i, dot) {
            $(dot).toggleClass('active', (i === currentSlideIndex));
        });

    }

    // Scroll Event Listener
    $(window).on({
        'DOMMouseScroll mousewheel': slideScroll
    });

    $(window).on("DOMMouseScroll mousewheel", function () {
        console.log($(window).scrollTop());
    });

    // Nav Dot Click Event Listener
    $(navDots).on( "click", function() {

        currentSlideIndex = $(this).data("url");

        showSlide();
        changeNavDots();

    });

});