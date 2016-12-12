
function getValues (){
  var siteTitleValue = $('.site-title-input').val();
  var SiteUrlValue = $('.site-url-input').val();
}

function makeLinkCard (){
  
}

$('#enter').on('click', function () {
  getValues();
  makeLinkCard();
});
