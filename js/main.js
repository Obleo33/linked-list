

function makeLinkCard (title,url){
  $("#site-list").append(
    '<div class = "site-card">' +
      '<h2 class="site-title">'+ title + '</h2>'+
      '<h3 class = "site-url">'+ url + '</h3>' +
      '<button class = "read-button">Read</button>' +
      '<button class = "delete-button">Delete</button>' +
    '</div>');
};

$('#enter').on('click', function () {
  var $siteTitleValue = $('.site-title-input').val();
  var $siteUrlValue = $('.site-url-input').val();
  makeLinkCard($siteTitleValue, $siteUrlValue);
});

$('#site-list').on('click', '.delete-button',removeCard);

function removeCard(){
  $(this).parent().remove();
};

$('#site-list').on('click', '.read-button',readCard);

function readCard(){
  $(this).parent().toggleClass('read');
  console.log("read");
};
