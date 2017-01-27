(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.carousel.carousel-slider').carousel({
            full_width: true,
            indicators: true,
            dist: 0,
            setInterval: (function () {
                $('.carousel').carousel('next');
            }, 2000)
        });
        $('select').material_select();
    }); // end of document ready
})(jQuery); // end of jQuery name space
