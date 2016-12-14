
// Main click event on enter
$('#enter').on('click', function () {
  var $siteTitleValue = $('.site-title-input').val();
  var $siteUrlValue = $('.site-url-input').val();
  // reset input fields
  clearInputs();
  // reset alert message
  alertMsg("");
  checkBlank($siteTitleValue, $siteUrlValue);
  // disable the enter button
  $('#enter').prop("disabled",true);
  count();
});

// Create a card function for links
function makeLinkCard (title,url){
  $("#site-list").prepend(
    '<div class = "site-card">' +
      '<h2 class="site-title">'+ title + '</h2>'+
      '<h2><a class = "site-url" target = "_blank" href = "'+ url +'">'+ url +'</a></h2>' +
      '<button class = "read-button">Read</button>' +
      '<button class = "delete-button">Delete</button>' +
    '</div>');
};

// Set enter key to click the enter button
$(".site-title-input, .site-url-input").keydown(function(e){
       if(e.which === 13){
           $("#enter").click();
       }
   });

// Counter function to keep track of number of cards and number that are read
function count(){
  sitesNum = $('.site-card').length;
  readNum = $('.read').length;
  unRead = sitesNum - readNum;
  console.log(sitesNum+" "+readNum);
  $('.card-count').text("Bookmarks: " + sitesNum);
  $('.read-count').text("Read: " + readNum);
  $('.unread-count').text("Unread: " + unRead);
}

// Enable enter button on keyup in either input field
$('.site-title-input, .site-url-input').keyup(function(){
  $('#enter').prop('disabled', false);
});

// Clear inputfunction
function clearInputs (){
  $('.site-title-input').val("");
  $('.site-url-input').val("");
}

// Validate user input
function validateInput (){
  checkBlank();
  checkValidUrl();
}

// Step 1 of the validate process: check if either input is blank
function checkBlank (title,url){
  if (title === '' || url === ''){
    alertMsg("You must enter both a title and url")
  } else {
    checkValidUrl(title,url)
  }
}

// Validate url for proper formatting
function validateURL(url) {
  var urlregex = new RegExp(
        "^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.)");
  return urlregex.test(url);
}


// Make link card if url is valid
function checkValidUrl(title,url){
  if(validateURL(url)===false){
    alertMsg("You must enter a valid URL beginning with http://")
  } else {
    makeLinkCard(title,url);
  }
};

// Alert user function
function alertMsg(msg){
  $('#alert-msg').text(msg);
}

// Remove read button
$('#remove-read').on('click', function (){
  $('.read').remove();
  count();
})

// Site card delete button
$('#site-list').on('click', '.delete-button',removeCard);
function removeCard(){
  $(this).parent().remove();
  // $(this.site-card).fadeOut(500,function() { $(this).parent().remove(); });
  count();
};

// Site card read button
$('#site-list').on('click', '.read-button',readCard);
function readCard(){
  $(this).parent().toggleClass('read');
  $(this).toggleClass('readButton');
  $('.site-url').toggleClass('readLink');
  count();
};
