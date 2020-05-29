AOS.init({
    duration: 800,
    easing: 'slide'
});

(function ($) {

    "use strict";

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });


    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();


    var burgerMenu = function () {

        $('.js-colorlib-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var $this = $(this);

            if ($('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvas');
            } else {
                $this.addClass('active');
                $('body').addClass('offcanvas');
            }
        });
    };
    burgerMenu();

    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {

        $(document).click(function (e) {
            var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas')) {

                    $('body').removeClass('offcanvas');
                    $('.js-colorlib-nav-toggle').removeClass('active');

                }

            }
        });

        $(window).scroll(function () {
            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-colorlib-nav-toggle').removeClass('active');

            }
        });

    };
    mobileMenuOutsideClick();

    var carousel = function () {
        $('.home-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.author-slider').owlCarousel({
            autoplay: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: true,
            dots: true,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    };
    carousel();


    var contentWayPoint = function () {
        var i = 0;
        $('.ftco-animate').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .ftco-animate.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {offset: '95%'});
    };
    contentWayPoint();

    var counter = function () {

        $('#section-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function () {
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });

            }

        }, {offset: '95%'});

    }
    counter();


    // magnific popup
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        // mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


})(jQuery);
var access = ""
var refresh = ""
var user_id = 0
var username = ""
var lastname = ""
var firtsname = ""
var email = ""
var is_superuser = false

$(document).ready(function () {
    $.ajax({
        url: 'http://127.0.0.1:8000/api/v1/book/',
        type: 'GET',
        success: function (json) {
            for (const book in json) {
                var object = Object.values(json[book])
                $('#body_blog').append('<div class="col-md-12">\n' +
                    '                                <div class="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated">\n' +
                    '                                    <a href="single.html" class="img img-2"\n' +
                    '                                       style="background-image: url(' + object[4] + ');"></a>\n' +
                    '                                    <div class="text text-2 pl-md-4">\n' +
                    '                                        <h3 class="mb-2"><a href="single.html">' + object[1] + '</a>\n' +
                    '                                        </h3>\n' +
                    '                                        <div class="meta-wrap">\n' +
                    '                                            <p class="meta">\n' +
                    '                                                <span><i class="icon-calendar mr-2"></i>' + object[2] + '</span>\n' +
                    '                                                <span><i class="icon-comment2 mr-2"></i>5 Comment</span>\n' +
                    '                                            </p>\n' +
                    '                                        </div>\n' +
                    '                                        <p class="mb-4">' + object[3] + '</p>\n' +
                    '                                        <p><a href="#" class="btn-custom">Read More <span\n' +
                    '                                                class="ion-ios-arrow-forward"></span></a></p>\n' +
                    '                                    </div>\n' +
                    '                                </div>\n' +
                    '                            </div>')
            }
        },

        error: function (xhr, status) {
            alert('Disculpe, existió un problema');
        }
    });
});

$('#btnLogin').click(function () {
    $.ajax({
        url: 'http://127.0.0.1:8000/api/v1/auth/jwt/create/',
        type: 'POST',
        data: {
            username: $('#inputUser').val(),
            password: $('#inputPassword').val()
        },
        success: function (json) {
            refresh = Object.values(json)[0]
            access = Object.values(json)[1]
            $.ajax({
                url: 'http://127.0.0.1:8000/api/v1/auth/users/me',
                type: 'GET',
                headers: {
                    "Authorization": "Bearer " + access
                },
                success: function (json) {
                    user_id = Object.values(json)[1]
                    username = Object.values(json)[2]

                    $.ajax({
                        url: 'http://127.0.0.1:8000/api/v1/user/' + user_id,
                        type: 'GET',
                        headers: {
                            "Authorization": "Bearer " + access
                        },
                        success: function (json) {
                            lastname = Object.values(json)[1]
                            firtsname = Object.values(json)[0]
                            email = Object.values(json)[2]
                            is_superuser = Object.values(json)[3]
                            $('#inputUser').val('')
                            $('#inputPassword').val('')
                            $('#userCardLogin').addClass('d-none')
                            $('#userCardAuth').removeClass('d-none')
                            $('#contentUser').append('<h5 class="card-title text-center">' + username + '</h5>\n' +
                                '                                <p class="text-center">' + email + '</p>\n' +
                                '                                <p class="text-center">' + firtsname + ' ' + lastname + '</p>')

                        },
                        error: function (xhr, status) {
                            alert('Disculpe, existió un problema 3');
                        }
                    });

                },
                error: function (xhr, status) {
                    alert('Disculpe, existió un problema');
                }
            });
        },
        error: function (xhr, status) {
            alert('Disculpe, existió un problema');
        }
    });
});

$('#btnLogout').click(function () {
    var access = ""
    var refresh = ""
    var user_id = 0
    var username = ""
    var lastname = ""
    var firtsname = ""
    var email = ""
    var is_superuser = false
    $('#contentUser').empty()
    $('#userCardAuth').addClass('d-none')
    $('#userCardLogin').removeClass('d-none')
});

