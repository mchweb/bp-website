/* Responsive menu */
$(document).ready(function(){
	$("#navTrigger").click(function(){
		$("div#navMain__back").animate({ opacity: 0.6 }, 100).addClass("navMain__back_open");

		$("nav#navMain").addClass("navMain_open");
		
	});
	$("#navMain__back").click(function(){
		$("div#navMain__back").animate({ opacity: 0 }, {duration: 200, complete: function() { $("div#navMain__back").removeClass("navMain__back_open"); }});
		
		$("nav#navMain").removeClass("navMain_open");
	});

  var x = 500;
  if (x < document.documentElement.clientHeight){x = document.documentElement.clientHeight}
	$("#firstScreen").css("max-height",x);
});


/* Start Animation On scroll */
var $animation_elements = $('.animateOnScroll');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } /*else {
      $element.removeClass('in-view');
    }*/
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

/* Updown */

  $(function () { 
$(document).ready(updownResize);
$(window).resize(updownResize);
});
  function updownResize(){
  $( "#updown" ).width(($( window ).width() - 1280)/2);
  }
    var updownElem = document.getElementById('updown');

    var pageYLabel = 0;

    updownElem.onclick = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
	  	  
      switch (this.className) {
        case 'up':
          pageYLabel = pageY;
          window.scrollTo(0, 0);
          this.className = 'down';
          break;

        case 'down':
          window.scrollTo(0, pageYLabel);
          this.className = 'up';
      }

    }

    window.onscroll = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
      var innerHeight = document.documentElement.clientHeight;
	  
      switch (updownElem.className) {
        case '':
          if (pageY < innerHeight) {
            updownElem.className = 'up';
          }
          break;

        case 'up':
          if (pageY == 0) {
            updownElem.className = '';
          }
          break;

        case 'down':
            if (pageY != 0){ updownElem.className = 'up';
			pageYLabel = 0;
			}
          break;

      }
    }