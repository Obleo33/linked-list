

function makeLinkCard (title,url){
  $("#site-list").append(
    '<div class = "site-card">' +
      '<h2 class="site-title">'+ title + '</h2>'+
      '<p class = "site-url">'+ url + '</p>' +
      '<button class = "read-button">Read</button>' +
      '<button class = "delete-button">Delete</button>'
  );
}

$('#enter').on('click', function () {
  var $siteTitleValue = $('.site-title-input').val();
  var $siteUrlValue = $('.site-url-input').val();
  makeLinkCard($siteTitleValue,$siteUrlValue);
});
