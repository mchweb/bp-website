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
    /* Mentors */
    /* Set the same maximum height for all blocks */
    funcMaxHeightElement('.c-mentors__item .c-mentors__content');  
    /* Set a background image */ 
    funcBackgroundImageBlocks('.c-mentors__item','.c-mentors__image img','center','center','.c-mentors__image','cover');     
    $('.c-mentors__item').each(function(mentorIndex, mentorElement){
        $(mentorElement).find('.c-mentors__image').height($(mentorElement).find('.c-mentors__image').width());
    });    
    /* Welcome block */
    /* Set a background image */
    funcBackgroundImageBlocks('.c-welcome','.c-welcome__thumbnail img','center','center','','cover'); 
    funcBackgroundImageBlocks('.c-welcome.is-position-back-left','.c-welcome__thumbnail img','left','top','','cover'); 
    
    /* Connecting flickity.js for parners slider */ 
    var elemSlider = $('.c-slider');
    var paramsSlider = { 
        pageDots: false,
        draggable: true,
        groupCells: true,
        prevNextButtons: true,
        cellAlign: 'left',
        contain: true
    };
    if(elemSlider.length){
        elemSlider.flickity(paramsSlider);
    }
    
    /* News */
    /* Set a background image */
    //funcMinHeightElement('.c-partners__item');   
    funcBackgroundImageBlocks('.c-partners__item','img','center','center','','contain'); 
    
    /* Accent */
    /* Set the same maximum height for all blocks */
    funcMaxHeightElement('.c-accent__item .c-accent__content');  
    
    /* Products */
    /* Set the same maximum height for all blocks */
    funcMaxHeightElementWithPaddings('.l-products__item .c-products__container');  
    
    /* Navigation mobile */
    /* Set the same maximum height for all blocks */    
    if($(window).width() <= screen_md_min & $(window).width() >= screen_xs_min){
        funcMaxHeightElementWithPaddings('.c-nav-submenu__item');            
    }   
    
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

/* Popup */
$(document).ready(function() {
    //resume
//  $('.mfp-link').magnificPopup({
//    type: 'inline',
//    preloader: false,
//    midClick: true,
//    removalDelay: 300,
//    mainClass: 'my-mfp-zoom-in',
//    callbacks: {
//      close: popupsClosed
//    }
//  });   
//  $('.mfp-link').click(function(){
//      if(!$($(this).attr('href')).hasClass('is-'+$(this).data('color'))){
//          $($(this).attr('href')).addClass('is-'+$(this).data('color'))
//      }      
//  });    
  $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		preloader: false,

		fixedContentPos: false
	});
});

function formSuccess(x){
  $('#popup__'+x).fadeOut( "fast", function() {
    $('#popup__'+x+'_success').fadeIn("fast")
  });  
}

function popupsClosed(classColor,element){
  $( ".popupContent" ).each(function(index) {
    $(this).css("display", "block");
  });
  $( ".popupContent_success" ).each(function(index) {
    $(this).css("display", "none");
  });
}

function showPopup(x, type, extra, color){
  switch (x) {
    case 0:
      $.magnificPopup.open({items: { src: $("#popup_success") }, 
      type: 'inline',
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
      break
    case 1:
      _showPopup('message', type, 'Задать вопрос', 'Не забудьте указать контактную информацию (телефон, электронная почта, социальные сети), <strong>чтобы мы могли в кратчайшие сроки вам ответить</strong>', '', color);
      break
    case 2:
      _showPopup('contact-dept1', type, 'Куда отправить информацию?', 'Укажите любой удобный способ связи (телефон, электронная почта, социальные сети) и мы отправим вам <strong>дополнительные, подробные материалы о франчайзинговых продуктах</strong>');
      break
    case 3:
      _showPopup('dept1', type, 'Как с вами связаться?', '', extra);
      break
    case 4:
      _showPopup('contact-dept2', type, 'Куда отправить информацию?', 'Укажите любой удобный способ связи (телефон, электронная почта, социальные сети) и мы отправим вам <strong>дополнительные, подробные материалы об акселерационной программе</strong>');
      break
    case 5:
      _showPopup('contact-dept2', type, 'Оставайтесь на связи', 'Укажите любой удобный способ связи (телефон, электронная почта, социальные сети): мы отправим вам дополнительные, подробные материалы об акселерационной программе и <strong>вышлем напоминание за 3&nbsp;дня до закрытия регистрации</strong>');
      break
    case 6:
      _showPopup('dept2', type, 'Заявка на акселерационную программу', 'Мы назначим вам предварительную встречу для уточнения дополнительной информации и согласования вашего участия');
      break
    case 7:
      _showPopup('contact-event', type, 'Куда отправить информацию?', 'Укажите любой удобный способ связи (телефон, электронная почта, социальные сети) и мы отправим вам <strong>дополнительные, подробные материалы о мероприятии</strong>');
      break
    case 8:
      _showPopup('contact-event', type, 'Оставайтесь на связи', 'Укажите любой удобный способ связи (телефон, электронная почта, социальные сети): мы отправим вам дополнительные, подробные материалы о мероприятии и <strong>вышлем напоминание за неделю до закрытия регистрации</strong>');
      break
    case 9:
      _showPopup('event-message', type, 'Связаться с организаторами', 'Чтобы не ждать, прямо сейчас позвоните по телефону <a href="tel:+73822933976">(3822) 933-976</a> и получите необходимую информацию. Либо задайте вопрос через эту форму (не забудьте указать контактную информацию (телефон, электронная почта, социальные сети), <strong>чтобы мы могли в кратчайшие сроки вам ответить</strong>)');
      break
    case 10:
      _showPopup('eventReg', type, 'Регистрация на мероприятие', '');
      break
    case 11:
      _showPopup('contact-event', type, 'Специально для вас', 'Мы не могли не заметить, что вы проявляете большой интерес к нашему мероприятию, поэтому подготовили для вас интересные материалы:</p><ul class="list-dots indented-1"><li>с каким бизнесом идти во франчайзинг,</li><li>достоинства франчайзинговой модели,</li><li>проблемные точки франчайзинга,</li><li>6 аргумантов за франчайзинговую модель.</li></ul><p><strong>Оставьте свои контакты и получите информацию в кратчайшие сроки.</strong>');
      break
    case 12:
      _showPopup('eventReg', type, 'Заявка на Федеральный акселератор франчайзинга', 'На указанную электронную почту мы вышлем дальнейшие инструкции');
      break
    default:
      break
  }
}

function _showPopup(popup, type, heading, caption, extra, color){
    console.log(color);
  $( "#popup__"+popup+"_heading" ).html( heading );
  $( "#popup__"+popup+"_caption" ).html( caption );
  $( "#popup__"+popup+"_type" ).val( type );
  if (extra){
    $("#dept1Form__product").val(extra);
  }
  if(!$("#popup_"+popup).hasClass('is-'+color)){
      $("#popup_"+popup).addClass('is-'+color);
  }
  $.magnificPopup.open({items: { src: $("#popup_"+popup) }, 
      type: 'inline',
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      callbacks: {
      close: popupsClosed
    }});
}