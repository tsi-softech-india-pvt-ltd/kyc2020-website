// (function($) {
//       $.fn.menumaker = function(options) {  
//        var cssmenu = $(this), settings = $.extend({
//          format: "dropdown",
//          sticky: false
//        }, options);
//        return this.each(function() {
//          $(this).find(".button").on('click', function(){
//            $(this).toggleClass('menu-opened');
//            var mainmenu = $(this).next('ul');
//            if (mainmenu.hasClass('open')) { 
//              mainmenu.slideToggle().removeClass('open');
//            }
//            else {
//              mainmenu.slideToggle().addClass('open');
//              if (settings.format === "dropdown") {
//                mainmenu.find('ul').show();
//              }
//            }
//          });
//          cssmenu.find('li ul').parent().addClass('has-sub');
//       multiTg = function() {
//            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
//            cssmenu.find('.submenu-button').on('click', function() {
//              $(this).toggleClass('submenu-opened');
//              if ($(this).siblings('ul').hasClass('open')) {
//                $(this).siblings('ul').removeClass('open').slideToggle();
//              }
//              else {
//                $(this).siblings('ul').addClass('open').slideToggle();
//              }
//            });
//          };
//          if (settings.format === 'multitoggle') multiTg();
//          else cssmenu.addClass('dropdown');
//          if (settings.sticky === true) cssmenu.css('position', 'fixed');
//       resizeFix = function() {
//         var mediasize = 1000;
//            if ($( window ).width() > mediasize) {
//              cssmenu.find('ul').show();
//            }
//            if ($(window).width() <= mediasize) {
//              cssmenu.find('ul').hide().removeClass('open');
//            }
//          };
//          resizeFix();
//          return $(window).on('resize', resizeFix);
//        });
//         };
//       })(jQuery);

//       (function($){
//       $(document).ready(function(){
//       $("#cssmenu").menumaker({
//          format: "multitoggle"
//       });
//       });
//       })(jQuery);

// function add_chatinline(){var hccid=23148499;var nt=document.createElement("script");nt.async=true;nt.src="https://mylivechat.com/chatinline.aspx?hccid="+hccid;var ct=document.getElementsByTagName("script")[0];ct.parentNode.insertBefore(nt,ct);}
// add_chatinline(); 

jQuery('.jss58').click(function()
      {
        $(this).prev().addClass('jss46');  
      });
      
      	$(document).mouseup(function(e) 
        {
            var container = $(".jss58");

            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                
            	$(".jss58").prev().removeClass('jss46');
            }
        });

        $('.has-sub').click(function()
        {
          $(this).find('.sub-menu').slideToggle();
        });

        $('.button').click(function()
        {
          $(this).toggleClass('menu-opened');
          $('div#cssmenu>ul').slideToggle();
        });

    $('.menu ul .dropdown li.sub-menu').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
