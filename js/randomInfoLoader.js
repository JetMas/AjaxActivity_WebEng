var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

var loadInfo = function(){
  var count = 3;
  for(var i = 0; i < count; i++) {
    //Appending count many random info everytime the user scrolls to the bottom.
    $('#randomInfo').append(`<div class="card"><div class="card-body text-center">${randomString(10)}</div></div>`);
  }
}

$(window).scroll(function() {
    //Check if the user hit the bottom
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      //if they did append new info to the div, needs to be at the bottom of the page.
      loadInfo();
    }
});
