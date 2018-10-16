$(document).ready(function() {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    //------- Niceselect  js --------//  

    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };
    if (document.getElementById("default-select2")) {
        $('select').niceSelect();
    };
    if (document.getElementById("service-select")) {
        $('select').niceSelect();
    };    

    //------- Lightbox  js --------//  

    $('.img-gal').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    //------- Superfist nav menu  js --------//  

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    /* ---------------------------------------------
     accordion
     --------------------------------------------- */

    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion").each(function() {
        $(this).find("dt > a").first().addClass("active").parent().next().css({
            display: "block"
        });
    });


     $(document).on('click', '.accordion > dt > a', function(e) {

        var current = $(this).parent().next("dd");
        $(this).parents(".accordion").find("dt > a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");

        return false;

    });

    //------- Tabs Js --------//  
    if (document.getElementById("horizontalTab")) {

    $('#horizontalTab').jqTabs({
        direction: 'horizontal',
        duration: 200
    });
    
    };  


    //------- Owl Carusel  js --------//  


    $('.active-popular-carusel').owlCarousel({
        items:4,
        margin: 30,
        loop:true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed:650,         
        autoplay:true,      
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items:4
            }
        }
    });

    $('.active-upcoming-event-carusel').owlCarousel({
        items:2,
        margin: 30,
        loop:true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed:650,         
        autoplay:true,      
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });


    $('.active-review-carusel').owlCarousel({
        items:2,
        margin: 30,
        loop:true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed:650,         
        autoplay:true,      
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });
    
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

    //------- Mobile Nav  js --------//  

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

            $(document).on('click', function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    //------- Smooth Scroll  js --------//  

    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

    $(document).ready(function() {

        $('html, body').hide();

        if (window.location.hash) {

            setTimeout(function() {

                $('html, body').scrollTop(0).show();

                $('html, body').animate({

                    scrollTop: $(window.location.hash).offset().top - 108

                }, 1000)

            }, 0);

        } else {

            $('html, body').show();

        }

    });



    //------- Header Scroll Class  js --------//  

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    //------- Google Map  js --------//  

    // if (document.getElementById("map")) {
    //     google.maps.event.addDomListener(window, 'load', init);

    //     function init() {
    //         var mapOptions = {
    //             zoom: 11,
    //             center: new google.maps.LatLng(40.6700, -73.9400), // New York
    //             styles: [{
    //                 "featureType": "water",
    //                 "elementType": "geometry",
    //                 "stylers": [{
    //                     "color": "#e9e9e9"
    //                 }, {
    //                     "lightness": 17
    //                 }]
    //             }, {
    //                 "featureType": "landscape",
    //                 "elementType": "geometry",
    //                 "stylers": [{
    //                     "color": "#f5f5f5"
    //                 }, {
    //                     "lightness": 20
    //                 }]
    //             }, {
    //                 "featureType": "road.highway",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [{
    //                     "color": "#ffffff"
    //                 }, {
    //                     "lightness": 17
    //                 }]
    //             }, {
    //                 "featureType": "road.highway",
    //                 "elementType": "geometry.stroke",
    //                 "stylers": [{
    //                     "color": "#ffffff"
    //                 }, {
    //                     "lightness": 29
    //                 }, {
    //                     "weight": 0.2
    //                 }]
    //             }, {
    //                 "featureType": "road.arterial",
    //                 "elementType": "geometry",
    //                 "stylers": [{
    //                     "color": "#ffffff"
    //                 }, {
    //                     "lightness": 18
    //                 }]
    //             }, {
    //                 "featureType": "road.local",
    //                 "elementType": "geometry",
    //                 "stylers": [{
    //                     "color": "#ffffff"
    //                 }, {
    //                     "lightness": 16
    //                 }]
    //             }, {
    //                 "featureType": "poi",
    //                 "elementType": "geometry",
    //                 "stylers": [{
    //                     "color": "#f5f5f5"
    //                 }, {
    //                     "lightness": 21
    //                 }]
    //             }, {
    //                 "featureType": "poi.park",
    //                 "elementType": "geometry",
    //                 "stylers": [{
    //                     "color": "#dedede"
    //                 }, {
    //                     "lightness": 21
    //                 }]
    //             }, {
    //                 "elementType": "labels.text.stroke",
    //                 "stylers": [{
    //                     "visibility": "on"
    //                 }, {
    //                     "color": "#ffffff"
    //                 }, {
    //                     "lightness": 16
    //                 }]
    //             }, {
    //                 "elementType": "labels.text.fill",
    //                 "stylers": [{
    //                     "saturation": 36
    //                 }, {
    //                     "color": "#333333"
    //                 }, {
    //                     "lightness": 40
    //                 }]
    //             }, {
    //                 "elementType": "labels.icon",
    //                 "stylers": [{
    //                     "visibility": "off"
    //                 }]
    //             }, {
    //                 "featureType": "transit",
    //                 "elementType": "geometry",
    //                 "stylers": [{
    //                     "color": "#f2f2f2"
    //                 }, {
    //                     "lightness": 19
    //                 }]
    //             }, {
    //                 "featureType": "administrative",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [{
    //                     "color": "#fefefe"
    //                 }, {
    //                     "lightness": 20
    //                 }]
    //             }, {
    //                 "featureType": "administrative",
    //                 "elementType": "geometry.stroke",
    //                 "stylers": [{
    //                     "color": "#fefefe"
    //                 }, {
    //                     "lightness": 17
    //                 }, {
    //                     "weight": 1.2
    //                 }]
    //             }]
    //         };
    //         var mapElement = document.getElementById('map');
    //         var map = new google.maps.Map(mapElement, mapOptions);
    //         var marker = new google.maps.Marker({
    //             position: new google.maps.LatLng(40.6700, -73.9400),
    //             map: map,
    //             title: 'Snazzy!'
    //         });
    //     }
    // }

    //------- Mailchimp js --------//  

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });

//Gallery
$('#myCarousel').carousel({
  interval: 10000
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});


// $("#lightSlider").lightSlider(); 


// $("#lightSlider").lightSlider({
//         item: 3,
//         autoWidth: false,
//         slideMove: 1, // slidemove will be 1 if loop is true
//         slideMargin: 10,
 
//         addClass: '',
//         mode: "slide",
//         useCSS: true,
//         cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
//         easing: 'linear', //'for jquery animation',////
 
//         speed: 400, //ms'
//         auto: false,
//         loop: false,
//         slideEndAnimation: true,
//         pause: 2000,
 
//         keyPress: false,
//         controls: true,
//         prevHtml: '',
//         nextHtml: '',
 
//         rtl:false,
//         adaptiveHeight:false,
 
//         vertical:false,
//         verticalHeight:500,
//         vThumbWidth:100,
 
//         thumbItem:10,
//         pager: true,
//         gallery: false,
//         galleryMargin: 5,
//         thumbMargin: 5,
//         currentPagerPosition: 'middle',
 
//         enableTouch:true,
//         enableDrag:true,
//         freeMove:true,
//         swipeThreshold: 40,
 
//         responsive : [],
 
//         onBeforeStart: function (el) {},
//         onSliderLoad: function (el) {},
//         onBeforeSlide: function (el) {},
//         onAfterSlide: function (el) {},
//         onBeforeNextSlide: function (el) {},
//         onBeforePrevSlide: function (el) {}
//     });


//   var slider = $("#lightSlider").lightSlider();
//     slider.goToSlide(3);
//     slider.goToPrevSlide();
//     slider.goToNextSlide();
//     slider.getCurrentSlideCount();
//     slider.refresh();
//     slider.play(); 
//     slider.pause();

});



