$(document).ready(function(){
	$("#navTrigger").click(function(){
		$("div#navMain__back").animate({ opacity: 0.6 }, 100).addClass("navMain__back_open");

		$("nav#navMain").addClass("navMain_open");
		
	});
	$("#navMain__back").click(function(){
		$("div#navMain__back").animate({ opacity: 0 }, {duration: 200, complete: function() { $("div#navMain__back").removeClass("navMain__back_open"); }});
		
		$("nav#navMain").removeClass("navMain_open");
	});

	$("#firstScreen").css("max-height",document.documentElement.clientHeight);
});