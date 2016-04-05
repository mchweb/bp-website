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
  var name = jQuery("input#js-input-name").val();
  var email = jQuery("input#js-input-email").val();
  var phone = jQuery("input#js-input-phone").val();
  
    $.ajax({
       url: "https://docs.google.com",
       data: {"entry.1089969093": name, "entry.938663736": email, "entry.1246347834": phone},
       type: "POST",
       dataType: "xml",
       error: function() {
               formSuccess();
           },
       success: function() {
               formSuccess();
           }

    });
}

function formSuccess(){
	$( "#js-div-back" ).addClass("b-landing-back_blur");
	$( "#js-div-result" ).addClass("b-landing-result-wrap_visible");
}