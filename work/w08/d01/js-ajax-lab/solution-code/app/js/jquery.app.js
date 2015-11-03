
// jQuery
$(document).ready(function(){
  $('form#new-doughnut').on('submit', sendOurDataViaAJAX)
  getDoughnuts();
});

function sendOurDataViaAJAX(event){
  event.preventDefault();

  // our API uses JSON, so we need to make a javascript object! There are a lot of ways to do this, this just a basic example.
  var doughnut = {
    style: $('form#new-doughnut select#doughnut-style').val(),
    flavor: $('form#new-doughnut input#doughnut-flavor').val()
  };

  // create a new AJAX request
  $.post('https://api.doughnuts.ga/doughnuts', doughnut)
    .done(function(data){
      addDoughnut(data);
    });

  // clear our input box!
  $('form#new-doughnut input#doughnut-flavor').val(null)
}

function getDoughnuts(){
  var doughnuts = $.get('https://api.doughnuts.ga/doughnuts')
    .done(function(data){
      for(var i = 0; i < data.length; i++){
        addDoughnut(data[i])
      }
    });
}

function addDoughnut(doughnut){
  console.log("addDoughnut is running")
  $("ul#doughnuts").prepend("<li>" + doughnut.flavor + " - <em>" + doughnut.style + "</em></li>")
}
