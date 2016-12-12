function getValues (){
  var $siteTitleValue = $('.site-title-input').val();
  var $siteUrlValue = $('.site-url-input').val();
}

function makeLinkCard (){
  $(".listed-sites").append('<h2 class="headding">heynow</h2>');
}

$('#enter').on('click', function () {
  getValues();
  makeLinkCard();
});
