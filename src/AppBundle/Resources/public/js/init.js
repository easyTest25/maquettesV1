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

// $(document).scroll(function(){
//     $('.always-show').css('position','');
//     var top = $('.always-show').offset().top;
//     $('.always-show').css('position','absolute');
//     $('.always-show').css('top',Math.max(top,$(document).scrollTop()));
// });
$(window).scroll(function () {
    var t = $('.left-side-content').offset();
    t = t.top;

    var s = $(window).scrollTop();

    var d = t - s;

    if (d < 0) {
        $('.always-show').addClass('fixed');
        $('.left-side-content').addClass('paddingTop');
        $('.card-in-validation').css('padding-top', '333px');
    } else {
        $('.always-show').removeClass('fixed');
        $('.left-side-content').removeClass('paddingTop');
        $('.card-in-validation').css('padding-top', '0px');
    }
});
