$(function(){
    //adjust header hight
       $('.home').height($(window).height());
       $(window).resize(function () {
       $('.home').height($(window).height());
       }); 
  
                  /*  smoothscroll
      -----------------------------------------------*/
     $(function() {
      $('.navbar-nav a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1500);
          event.preventDefault();
      });
     
      jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 100) {
          jQuery(".navbar ").css("background","rgb(64, 64, 64)");  
            jQuery(".navbar").addClass("animated-nav");
        } else {
          jQuery(".navbar ").css("background","transparent");
            jQuery(".navbar").removeClass("animated-nav");
        }
         
      });
       //scroll to service
       $('.home .button ').click(function(){
        $('html, body').animate({
               scrollTop: $('.our-project').offset().top
            },2500);
        });
  
  });
        
  
      });