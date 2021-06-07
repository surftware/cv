/*-----------------------------------------------------------------------------------

    Theme Name: Amava - Startup Agency and SasS Business Template
    Description: Startup Agency and SasS Business Template
    Author: chitrakootweb
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. scrollIt
        02. Preloader
        03. Sticky Header
        04. One Page Navigation
        05. Scroll To Top
        06. Wow animation - on scroll
        07. Parallax
        08. Video
        09. Resize function
        10. FullScreenHeight function
        11. LogoScreenChange function
        12. ScreenFixedHeight function
        13. FullScreenHeight and screenHeight with resize function
        14. Sliders
        15. Tabs
        16. CountUp
        17. Countdown
        18. Isotop
        
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. scrollIt
        --------------------------------------*/        
        $.scrollIt({
          upKey: 38,                // key code to navigate to the next section
          downKey: 40,              // key code to navigate to the previous section
          easing: 'swing',          // the easing function for animation
          scrollTime: 600,          // how long (in ms) the animation takes
          activeClass: 'active',    // class given to the active nav element
          onPageChange: null,       // function(pageIndex) that is called when page is changed
          topOffset: -70            // offste (in px) for fixed top navigation
        });

        /*------------------------------------
            02. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            03. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var innerlogo = $(".navbar-brand.inner-logo img");
            
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                if ($window.width() >= 992) {
                    innerlogo.attr('src', 'img/logos/logo-white.png');
                }
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                if ($window.width() >= 992) {
                    innerlogo.attr('src', 'img/logos/logo.png');
                }
            }
        });


        /*------------------------------------
            04. One Page Navigation
        --------------------------------------*/

        if ($window.width() <= 991) {
            $('.onepage-header .navbar-nav .nav-link').on("click", function(){
                $('.navbar-nav').css("display", "none");
                $('.navbar .navbar-toggler').removeClass('menu-opened');
            });
        }


        /*------------------------------------
            05. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });


        /*------------------------------------
            06. Wow animation - on scroll
        --------------------------------------*/
        
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        })
        wow.init();


        /*------------------------------------
            07. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        
        /*------------------------------------
            08. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });


        /*------------------------------------
            09. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });


        /*------------------------------------
            10. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            11. LogoScreenChange function
        --------------------------------------*/

        function LogoScreenChange() {
            var innerlogo = $(".navbar-brand.inner-logo img");
            if ($window.width() >= 992) {
                innerlogo.attr('src', 'img/logos/logo-white.png');
            }
            else{
                innerlogo.attr('src', 'img/logos/logo.png');   
            }
        }

        /*------------------------------------
            12. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            13. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
            LogoScreenChange();
        }

        SetResizeContent();

    // === when document ready === //
    $(document).on("ready", function() {

        /*------------------------------------
            14. Sliders
        --------------------------------------*/

        // Testmonials carousel1
        $('#testmonials-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 800,            
            nav: false,
            dots: true,
            center:true,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });

       // Clients carousel
        $('#clients').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsiveClass: true,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                768: {
                    items: 3,
                    margin: 40,
                },
                992: {
                    items: 4,
                    margin: 60,
                    },
                    1200: {
                    items: 5,
                    margin: 80,
                }
            }
        });

        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });   

        /*------------------------------------
            15. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            16. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            17. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            18. Isotop
        --------------------------------------*/

        // isotope with magnificPopup
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        var $gallery = $('.gallery').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });

        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        // stellar
        $window.stellar();

    });

})(jQuery);