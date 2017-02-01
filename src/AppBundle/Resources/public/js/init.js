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

        $('#calendar').fullCalendar({
            header: false,
            height: 'auto',
            events: [
                {
                    title  : 'event1',
                    start  : '2017-02-11',
                    editable: true,
                    color: 'yellow',   // an option!
                    textColor: 'black'
                },
                {
                    title  : 'event2',
                    start  : '2017-02-20'
                },
                {
                    title  : 'event3',
                    start  : '2010-01-09T12:30:00',
                    allDay : false // will make the time show
                }
            ]
        });

        $('.modal').modal();

        $('#example').DataTable();

        $('.select-all').on('click', function () {
            if ($('.select-all').find('input').prop('checked')) {
                $('[data-select-all="select-all"]').prop('checked', 'checked');
            } else {
                $('[data-select-all="select-all"]').prop('checked', '');
            }
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space

