/*
 * Application
 */
$(document).ready(function(){
    /* Home page */
    
    /* Scroll to up */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollup').fadeIn();
		} else {
			$('#scrollup').fadeOut();
		}
	});
	$('#scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});  
    /* Welcome block */
    /* Set a background image */
    funcBackgroundImageBlocks('.c-welcome','.c-welcome__thumbnail img','center','center','','cover'); 
    
    /* Connecting flickity.js for parners slider */ 
    var elemSlider = $('.c-slider');
    var paramsSlider = { 
        pageDots: false,
        draggable: true,
        groupCells: true,
        prevNextButtons: true
    };
    if(elemSlider.length){
        elemSlider.flickity(paramsSlider);
    }
    
    /* News */
    /* Set a background image */
    //funcMinHeightElement('.c-partners__item');   
    funcBackgroundImageBlocks('.c-partners__item','img','center','center','','contain'); 
    
    /* Accent */
    funcMaxHeightElement('.c-accent__item');   
});     

/* Responsive menu */
$(document).ready(function(){
	$("#navTrigger").click(function(){
    $("body").addClass("modal_open");
		$("div#navMain__back").animate({ opacity: 0.6 }, 100).addClass("navMain__back_open");

		$("nav#navMain").addClass("navMain_open");
		
	});
	$("#navMain__back").click(function(){
    $("body").removeClass("modal_open");
		$("div#navMain__back").animate({ opacity: 0 }, {duration: 200, complete: function() { $("div#navMain__back").removeClass("navMain__back_open"); }});
		
		$("nav#navMain").removeClass("navMain_open");
	});


  var x = 590;
  if (x < document.documentElement.clientHeight){x = document.documentElement.clientHeight}
	$("#firstScreen").css("max-height",x);
});