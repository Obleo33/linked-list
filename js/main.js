

function makeLinkCard (title,url){
  $("#site-list").prepend(
    '<div class = "site-card">' +
      '<h2 class="site-title">'+ title + '</h2>'+
      '<h2><a class = "site-url" target = "_blank" href = "'+ url +'">'+ url +'</a></h2>' +
      '<button class = "read-button">Read</button>' +
      '<button class = "delete-button">Delete</button>' +
    '</div>');
};

$('#enter').on('click', function () {
  var $siteTitleValue = $('.site-title-input').val();
  var $siteUrlValue = $('.site-url-input').val();
  clearInputs();
  alertMsg("");
  checkBlank($siteTitleValue, $siteUrlValue);
  $('#enter').prop("disabled",true);
  count();
});

$(".site-title-input, .site-url-input").keydown(function(e){
       if(e.which === 13){
           $("#enter").click();
       }
   });

function count(){
  sitesNum = $('.site-card').length;
  readNum = $('.read').length;
}


$('.site-title-input, .site-url-input').keyup(function(){
  $('#enter').prop('disabled', false);
});

function clearInputs (){
  $('.site-title-input').val("");
  $('.site-url-input').val("");
}

function validateInput (){
  checkBlank();
  checkValidUrl();
}

function checkBlank (title,url){
  if (title === '' || url === ''){
    alertMsg("You must enter both a title and url")
  } else {
    checkValidUrl(title,url)
  }
}

function checkValidUrl(title,url){
  if(validateURL(url)===false){
    alertMsg("You must enter a valid URL beginning with http://")
  } else {
    makeLinkCard(title,url);
  }
};

function validateURL(url) {
  var urlregex = new RegExp(
        "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.)");
  return urlregex.test(url);
}

function alertMsg(msg){
  $('#alert-msg').text(msg);
}

$('#remove-read').on('click', function (){
  $('.read').remove();
  count();
})

$('#site-list').on('click', '.delete-button',removeCard);

function removeCard(){
  $(this).parent().remove();
  // $(this.site-card).fadeOut(500,function() { $(this).parent().remove(); });
  console.log(sitesNum);
  count();
};

$('#site-list').on('click', '.read-button',readCard);

function readCard(){
  $(this).parent().toggleClass('read');
  $(this).toggleClass('readButton');
  $('.site-url').toggleClass('readLink');
  count();
};
