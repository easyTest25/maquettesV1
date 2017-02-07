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
        if ($('.left-side-content').length() > 1) {
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
                }
            );
        }
        $(".button-collapse").sideNav();
        $(".dropdown-button").dropdown(
            {hover: false}
        );

        var date = new Date();
        var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();
        $('#calendar').fullCalendar({
            header: {
                center: '',
                left: '',
                right: 'today prev,next'
            },
            height: 'auto',
            eventClick: function (calEvent, jsEvent, view) {
                $('#modal1').modal('open');

            },
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    backgroundColor: "#f56954", //red
                    borderColor: "#f56954" //red
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    backgroundColor: "#f39c12", //yellow
                    borderColor: "#0073b7" //yellow
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    backgroundColor: "#0073b7", //Blue
                    borderColor: "#f39c12" //Blue
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: "#00c0ef", //Info (aqua)
                    borderColor: "#00c0ef" //Info (aqua)
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    backgroundColor: "#00a65a", //Success (green)
                    borderColor: "#00a65a" //Success (green)
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/',
                    backgroundColor: "#3c8dbc", //Primary (light-blue)
                    borderColor: "#3c8dbc" //Primary (light-blue)
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

