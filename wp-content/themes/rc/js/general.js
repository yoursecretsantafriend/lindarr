/*---------------------------------------------------------------------*/ ;
(function($) {
    /*================= Global Variable Start =================*/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var IEbellow9 = !$.support.leadingWhitespace;
    var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
    var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
    function isIEver() {var myNav = navigator.userAgent.toLowerCase();return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;}
    //if (isIEver () == 8) {}
    var ww = document.body.clientWidth,	wh = document.body.clientHeight; 
    var mobilePort = 1024, ipadView = 1024, wideScreen = 1600;
    /*================= Global Variable End =================*/
    
    /*================= On Document Load Start =================*/
    $(document).ready(function() {
        jQuery('body').removeClass('noJS').addClass("hasJS");
        jQuery(this).scrollTop(0);
        getWidth();
        menuMove();
    
        // Custom Select
        if (jQuery(".customSelect").length) {
            jQuery('.customSelect').customSelect();
        }
    
        newsSliderFn();
        pressSliderFn();
        photoSliderFn();
        videoSliderFn();
        
        // Home Slider
        if (jQuery(".homeBanner").length) {
            var homeSlider = new Swiper('.homeBanner .swiper-container', {
                spaceBetween: 0,
                speed: 1100,
                loop: true,
                keyboard: true,
                effect: 'fade',
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.homeBanner-next',
                    prevEl: '.homeBanner-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
        }
    
        // Issue Slider
        if (jQuery(".issueSlider").length) {
            var issueSlider = new Swiper('.issueSlider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: 1,
                speed: 1100,
                simulateTouch: false,
                allowTouchMove: false,
                loop: true,
                keyboard: true,
                navigation: {
                    nextEl: '.issueSlider-next',
                    prevEl: '.issueSlider-prev',
                }			
            });
        }
        
    
        
        
        jQuery(".newsTab").on("click",function(){ 
            setTimeout(function(){ newsSliderFn(); }, 200);	
        });
        
        jQuery(".pressTab").on("click",function(){ 
            setTimeout(function(){ pressSliderFn(); }, 200);
        });
        
        jQuery(".photoTab").on("click",function(){ 
            setTimeout(function(){ photoSliderFn(); }, 200);
        });
        
        jQuery(".videoTab").on("click",function(){ 
            setTimeout(function(){ videoSliderFn(); }, 200);
        });
        
        
        jQuery("#tab-additional_information").hide();
    
         jQuery(".tabs").on('click', 'a', function(e){
             e.preventDefault();
             jQuery('#tabs-container .entry-content').hide();
             jQuery(jQuery(this).attr("href")).show();
         });
        
        // Page Scrolling
        jQuery('a[href="#content"]').click(function() {
            skipTo = jQuery(this).attr('href');
            skipTo = jQuery(skipTo).offset().top - 10;
            jQuery('html, body').animate({
                scrollTop: skipTo
            }, '1000');
            return false;
        });
        
        if(jQuery(".news-slider").length){
            jQuery(".news-img").each(function(){
                  var imagePath=jQuery(this).find("img").attr("src");
                  jQuery(this).css("background-image","url( "+imagePath+" )");
            });
        }
        
        if(jQuery(".photoItem .imgHolder").length){
            jQuery(".photoItem .imgHolder").each(function(){
                  var imagePathGallery=jQuery(this).find("img").attr("src");
                  jQuery(this).css("background-image","url( "+imagePathGallery+" )");
            });
        }
        
        // Back to Top function
        if (jQuery("#backtotop").length) {
            jQuery(window).scroll(function() {
                if (jQuery(window).scrollTop() > 200) {
                    jQuery('#backtotop').fadeIn('250').css('display', 'block').addClass("active");
                } else {
                    jQuery('#backtotop').fadeOut('250').removeClass("active");
                }
            });
            $('#backtotop').click(function() {
                jQuery('html, body').animate({
                    scrollTop: 0
                }, '200');
                return false;
            });
        };
    
        //Image gallery popup
        if (jQuery(".popup-gallery").length) { 
        jQuery('.popup-gallery').magnificPopup({
              type: 'image',
              closeOnContentClick: false,
              closeBtnInside: false,
              mainClass: 'mfp-with-zoom mfp-img-mobile',
              image: {
                verticalFit: true,
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                  return item.el.attr('title');
                }
              },
              gallery: {
                enabled: true
              },
              zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                  return element.find('img');
                }
              }
            });
        }
            
            
            //youtube & vimeo popup
            if (jQuery(".popup-youtube").length) { 
        jQuery('.popup-youtube').magnificPopup({
            disableOn: 319,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: false
          });
        }
            
            //Zoom popup
            if (jQuery(".popup-with-zoom").length) { 
            jQuery('.popup-with-zoom').magnificPopup({
              type: 'inline',
              fixedContentPos: false,
              fixedBgPos: true,
              overflowY: 'auto',
              closeBtnInside: true,
              preloader: false,
              midClick: true,
              removalDelay: 300,
              mainClass: 'my-mfp-zoom-in'
            });
            }
    
        // Get Focus Inputbox
        if (jQuery(".getFocus").length) {
            jQuery(".getFocus").each(function() {
                jQuery(this).on("focus", function() {
                    if (jQuery(this).val() == jQuery(this)[0].defaultValue) {
                        jQuery(this).val("");
                    };
                }).on("blur", function() {
                    if (jQuery(this).val() == "") {
                        jQuery(this).val(jQuery(this)[0].defaultValue);
                    };
                });
            });
        };
    
        // For device checking
        if (isMobile == false) {
    
        };
    
        
        jQuery(window).scroll(function() {    
            var scroll = jQuery(window).scrollTop();
        
            if (scroll >= 10) {
                jQuery("#header").addClass("headerFixed");
                jQuery("body").addClass("fixedHeader");
            } else {
                jQuery("#header").removeClass("headerFixed");
                jQuery("body").removeClass("fixedHeader");
            }
        });
    
        /*================= On Document Load and Resize Start =================*/
        jQuery(window).on('resize', function() {
    
            ww = document.body.clientWidth;
            wh = document.body.clientHeight;
    
            jQuery('.vCenter').each(function() {
                jQuery(this).verticalAlign();
            });
    
            if (jQuery("body").hasClass("mobilePort")) {
                jQuery("body").removeClass("wob");
            }
    
        }).trigger('resize');
        /*================= On Document Load and Resize End =================*/
    
        //Navigation
        if (jQuery("#navMob").length) {
            if (jQuery(".toggleMenu").length == 0) {
                jQuery("#mainNav").prepend('<div class="menuBar"><a href="#" class="toggleMenu"><span class="iconBar"></span><span class="iconBar"></span><span class="iconBar"></span></a></div>');
            }
            jQuery(".toggleMenu").click(function() {
                jQuery(this).toggleClass("active");
    
                jQuery("body").addClass("activeMobNav");
                return false;
            });
            jQuery("#navMob li a").each(function() {
                if (jQuery(this).next().length) {
                    jQuery(this).parent().addClass("parent");
                };
            })
            jQuery("#navMob li.parent").each(function() {
                if (jQuery(this).has(".menuIcon").length <= 0) jQuery(this).append('<i class="menuIcon fa fa-angle-down">&nbsp;</i>')
            });
            dropdown('nav', 'hover', 1);
            adjustMenu();
    
        };
    
    });
    /*================= On Document Load End =================*/
    
    /*================= On Window Resize Start =================*/
    jQuery(window).bind('resize orientationchange', function() {
        getWidth();
        adjustMenu();
        menuMove();
    });
    
    /*================= On Window Resize End =================*/
    
    /*================= On Window Load Start =================*/
    jQuery(window).load(function() {
    
    });
    /*================= On Document Load End =================*/
    
    
    function getWidth() {
        ww = document.body.clientWidth;
        if (ww > wideScreen) {
            jQuery('body').removeClass('device').addClass('desktop widerDesktop');
        }
        if (ww > mobilePort && ww <= wideScreen) {
            jQuery('body').removeClass('device widerDesktop').addClass('desktop');
        }
        if (ww <= mobilePort) {
            jQuery('body').removeClass('desktop widerDesktop').addClass('device');
        }
        if (ww > 767 && ww < 1025) {
            jQuery('body').addClass('ipad');
        } else {
            jQuery('body').removeClass('ipad');
        }
        if (ww > 319 && ww < 768) {
            jQuery('body').addClass('mobile');
        } else {
            jQuery('body').removeClass('mobile');
        }
    }
    
    })(jQuery);
    
    
    function validate() {
    return false;
    };
    
    
    function menuMove() {
    if (jQuery(".mobileNav").length == 0) {
        var navigation = jQuery('#nav').clone();
        jQuery(navigation).appendTo("body").wrap("<div class='mobileNav'></div>");
        if (jQuery(".mobileNav #navMob").length == 0) {
            jQuery(".mobileNav #nav").attr("id", "navMob");
            jQuery(".mobileNav").append("<span class='menuClose'>X</span>"); 
            jQuery(".mobileNav").append("<span class='navigationText'>Navigation</span>");
            //jQuery(".mobileNav").append("<span class='logoText'><span class='logoIcon homeSprite'></span></span>");
            jQuery(".mobileNav .menuClose").click(function() {
                jQuery("body").removeClass("activeMobNav");
            });
        }
    }
    }
    
    
    function newsSliderFn(){
        //News Slider
        if (jQuery(".newsSlider").length) {
            var newsSlider = new Swiper('.newsSlider .swiper-container', {
                spaceBetween: 30,
                slidesPerView: 3,
                speed: 1100,
                slidesPerGroup:3,
                loop: false,
                simulateTouch: false,
                allowTouchMove: false,
                keyboard: false,
                direction: 'vertical',
                navigation: {
                    nextEl: '.newsSlider-next',
                    prevEl: '.newsSlider-prev',
                },
            breakpoints: {
            320: {
              slidesPerView: 1,
              simulateTouch: false,
              slidesPerGroup:1,
              allowTouchMove: false
            },
            767: {
              slidesPerView: 1,
              simulateTouch: false,
              slidesPerGroup:1,
              allowTouchMove: false
            },
            992: {
              slidesPerView: 2,
              simulateTouch: false,
              slidesPerGroup:2,
              allowTouchMove: false
            },
            1169: {
              slidesPerView: 3,
              simulateTouch: false,
              slidesPerGroup:3,
              allowTouchMove: false
            }
          }			
            });
        }	
    }
    
    function pressSliderFn(){
        //Press  Slider
        if (jQuery(".pressSlider").length) {
            var pressSlider = new Swiper('.pressSlider .swiper-container', {
                spaceBetween: 30,
                slidesPerView: 3,
                speed: 1100,
                loop: false,
                slidesPerGroup:3,
                simulateTouch: false,
                allowTouchMove: false,
                keyboard: true,
                direction: 'vertical',
                navigation: {
                    nextEl: '.pressSlider-next',
                    prevEl: '.pressSlider-prev',
                },
            breakpoints: {
            320: {
              slidesPerView: 1,
              simulateTouch: false,
              slidesPerGroup:1,
              allowTouchMove: false
            },
            767: {
              slidesPerView: 1,
              simulateTouch: false,
              slidesPerGroup:1,
              allowTouchMove: false
            },
            992: {
              slidesPerView: 2,
              simulateTouch: false,
              slidesPerGroup:2,
              allowTouchMove: false
            },
            1169: {
              slidesPerView: 3,
              simulateTouch: false,
              slidesPerGroup:3,
              allowTouchMove: false
            }
          }					
            });
        }
    }
    
    function photoSliderFn(){
    //Photo Gallery Slider
        if (jQuery(".photoSlider").length) {
            var photoSlider = new Swiper('.photoSlider .swiper-container', {
                spaceBetween: 30,
                slidesPerView:1,
                speed: 1100,
                loop: false,
                simulateTouch: false,
                keyboard: true,
                navigation: {
                    nextEl: '.photoSlider-next',
                    prevEl: '.photoSlider-prev',
                }			
            });
        }	
    }
    function videoSliderFn(){
    //Video Gallery Slider
        if (jQuery(".videoSlider").length) {
            var videoSlider = new Swiper('.videoSlider .swiper-container', {
                spaceBetween: 30,
                slidesPerView:1,
                speed: 1100,
                loop: false,
                simulateTouch: false,
                keyboard: true,
                navigation: {
                    nextEl: '.videoSlider-next',
                    prevEl: '.videoSlider-prev',
                }			
            });
        }	
    }
    