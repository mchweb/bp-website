$( document ).ajaxStart(function() {
  $( ".b-landing-form__button" ).each(function() {
    $( this ).addClass("b-landing-form__button_loading");
    });
});
$( document ).ajaxStop(function() {
  $( ".b-landing-form__button" ).each(function() {
    $( this ).removeClass("b-landing-form__button_loading");
    });
});

function sendForm(){
  if ($('#js-form').attr('action') == "test"){
    return;
  }

  var name = jQuery("input#js-input-name").val();
  var email = jQuery("input#js-input-email").val();
  var phone = jQuery("input#js-input-phone").val();
  
    $.ajax({
       url: "https://docs.google.com/forms/d/1SE-O5tIVq6vmTSr4pdD-0_NUjmzn8yPx-CtNEMJAhMY/formResponse",
       data: {"entry.1846215270": name, "entry.198044038": email, "entry.165042608": phone},
       type: "POST",
       dataType: "xml",
       error: function() {
               yaCounter35145470.reachGoal('check');
               $('#js-form').attr('action', 'test');
               $('#js-form').submit();
           },
       success: function() {
              yaCounter35145470.reachGoal('check');
               $('#js-form').attr('action', 'test');
               $('#js-form').submit();
           }

    });
}

$( ".b-test-item__checkbox" ).each(function() {
  $( this ).change(function() {
  if($( this ).is(":checked")) {
  $( this ).parent().parent().parent().addClass("b-test-item_checked");
}else{
$( this ).parent().parent().parent().removeClass("b-test-item_checked");
}
});
});

function checkTest(){
  var name = jQuery("input#js-input-name").val();
  var email = jQuery("input#js-input-email").val();
  var phone = jQuery("input#js-input-phone").val();
  var result = ":";
  var sum = 0;
  $( ".b-test-item__checkbox" ).each(function() {
    if($( this ).is(":checked")) {
      result += "1 ";
      sum++;
    }else{
      result += "0 ";
    }
  });
    $.ajax({
       url: "https://docs.google.com/forms/d/1SE-O5tIVq6vmTSr4pdD-0_NUjmzn8yPx-CtNEMJAhMY/formResponse",
       data: {"entry.1846215270": name, "entry.198044038": email, "entry.165042608": phone, "entry.658524909": result, "entry.226307745": sum},
       type: "POST",
       dataType: "xml",
       error: function() {
               showTestRes();
           },
       success: function() {
        showTestRes();
           }

    });
}

function showTestRes(){
  $( "#js-div-back" ).addClass("b-landing-back_blur");
  $( "#js-div-result" ).addClass("b-landing-result-wrap_visible");

  var x = 0;
  $( ".b-test-item__checkbox" ).each(function() {
    if($( this ).is(":checked")) {
      x++;
    }

  });
  $("#js-test-result").html(x);
  if((x < 4)){
    $("#js-test-heading").html("У вас хорошие амбиции!");
    $("#js-test-caption").html("Ваши идеи еще нужно доработать: есть текущие задачи, которые необходимо решить перед тем, как начать упаковывать свой бизнес во франшизу. Все это позволит вашему бизнесу вырасти в будущем.");
  }else{
    if ((x < 9)){
      $("#js-test-heading").html("Вы хорошо заботитесь о своем бизнесе");
      $("#js-test-caption").html("Немного доработок, и останется только правильно упаковать вашу бизнес-систему, чтобы франшиза продавалась и приносила вам солидный доход.");
    }
    else{
      $("#js-test-heading").html("У вас до сих пор нет франшизы?");
      $("#js-test-caption").html("Так чего же вы ждете? Вашей системности можно только позавидовать: такой порядок в бизнесе однозначно может принести вам огромные деньги, если грамотно передать свои знания партнерам.");
    }
  }

}

function sendInfo(){
  var name = jQuery("input#js-input-name").val();
  var email = jQuery("input#js-input-email").val();

  var dataString = 'NAME=' + name + '&EMAIL=' + email; 
    $.ajax({
      type: 'POST',
      url: 'http://ipartner.pro/send/mail',
      data: dataString,
      success: function() {
              $("#js-button-result").addClass("b-landing-form__button_disabled");
               $("#js-button-result").prop('disabled', true);
               $("#js-button-result").html("Информация выслана");
      },
      error:  function(){
            alert('Упс, произошла какая-то странная ошибка. Попробуйте повторить запрос, а если ошибка повторится, свяжитесь с веб-мастером по электронной почте webmaster@winbd.ru');
        }
    });
}