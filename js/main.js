

function makeLinkCard (title,url){
  $("#site-list").append(
    '<div class = "site-card">' +
      '<h2 class="site-title">'+ title + '</h2>'+
      '<div class = "section-break"></div>' +
      '<p class = "site-url">'+ url + '</p>' +
      '<div class = "section-break"></div>' +
      '<button class = "read-button">Read</button>' +
      '<button class = "delete-button">Delete</button>' +
    '</div>'
  );
}

$('#enter').on('click', function () {
  var $siteTitleValue = $('.site-title-input').val();
  var $siteUrlValue = $('.site-url-input').val();
  console.log ($siteUrlValue)
  makeLinkCard($siteTitleValue, $siteUrlValue);
});

$('#site-list').on('click', '.delete-button',removeCard);


function removeCard(){
  console.log("putput");
  $(this).parent().remove();
};
