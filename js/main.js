

function makeLinkCard (title,url){
  $("#site-list").prepend(
    '<div class = "site-card">' +
      '<h2 class="site-title">'+ title + '</h2>'+
      '<a class = "site-url" target = "_blank" href = "'+ url +'">'+ url +'</a>' +
      '<button class = "read-button">Read</button>' +
      '<button class = "delete-button">Delete</button>' +
    '</div>');
};

$('#enter').on('click', function () {
  var $siteTitleValue = $('.site-title-input').val();
  var $siteUrlValue = $('.site-url-input').val();
  makeLinkCard($siteTitleValue, $siteUrlValue);
  clearInputs();
});

function clearInputs (){
  $('.site-title-input').val("");
  $('.site-url-input').val("");
}

function checkBlank (){
  $('.site-title-input').placeholder = "Both fields must be filled out";
  $('.site-url-input').placeholder = ""
}

function validateInput (){
  checkBlank();
  checkValidUrl();
}

$('#site-list').on('click', '.delete-button',removeCard);

function removeCard(){
  $(this).parent().remove();
};

$('#site-list').on('click', '.read-button',readCard);

function readCard(){
  $(this).parent().toggleClass('read');
};
