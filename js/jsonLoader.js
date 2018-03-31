var getData = function(jsonUrl){
  var dataLoc = $('#jsonArea');
  dataLoc.empty();
  $.getJSON(`json/${jsonUrl}`, function (data) {
    //console.log('success');
    $.each( data, function( key, val ) {
      //console.log(key + " : " + val);
      dataLoc.append(`<li class="list-group-item">${key + " : " + val}</li>`)
    });
  }).fail(function(){
    dataLoc.append('<li class="list-group-item">Failed to load json file.</li>')
  });
}

$(document).ready(function () {
  $('#jsonBtn1').click(function () {
    console.log('click1');
    getData('info.json');
  });
  $('#jsonBtn2').click(function () {
    console.log('click2');
    getData('malformed.json');
  });
});
