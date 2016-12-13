

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
  checkBlank($siteTitleValue, $siteUrlValue);
  $('#enter').prop("disabled",true);;
});

$('.site-title-input, .site-url-input').keyup(function(){
  $('#enter').prop('disabled', false);
});

function clearInputs (){
  $('.site-title-input').val("");
  $('.site-url-input').val("");
}

function checkBlank (title,url){
  if (title === '' || url === ''){
    console.log("hey")
  } else {
    makeLinkCard(title,url);
  }
}

  $('.site-title-input').placeholder = "Both fields must be filled out";
  $('.site-url-input').placeholder = ""

function validateInput (){
  checkBlank();
  checkValidUrl();
}

function alertMsg(msg){
  $('alert-msg').text();
}

$('#site-list').on('click', '.delete-button',removeCard);

function removeCard(){
  $(this).parent().remove();
};

$('#site-list').on('click', '.read-button',readCard);

function readCard(){
  $(this).parent().toggleClass('read');
  $(this).toggleClass('readButton');
  $(this).siblings('a').toggleClass('readLink');
};
