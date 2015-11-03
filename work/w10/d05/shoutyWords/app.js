var wdi_16_names = [];

function resetNames(){
  wdi_16_names = ["ke$ha", "Batman Meets Banana", "['hip', 'hip']", "The Meal Deal", "VacayChat", "DrumRockstar (aka Drum for Dollars)", "RoaDRageR", "Claire's Connections", "SongbookHub", "ui-router", "angular factory", "ng-click", "tacos", "API", "client", "server", "index.html", "instagram pizza", "mongo DB", "postgreSQL", "rails", "express", "MEAN stack", "packet-switching", "DNS", "CSS", "constructor function", "object literal", "primitive data types", "boolean", "bootstrap", "the DOM", "scope", "closure", "$scope", "$rootScope", "$http", "jQuery", "event listener", "node.js", "[TASER]", "fogo", "callback", "promise", "git", "git add -A", "cd", "prototype", "sass", ".splice()", ".split()", ".join()", "array", "hash", "truthy", "||=", "instance variable", "class", "IRB", "rails", "MVC", "rake db:create", "rake db:migrate", "rails s", "rails c", "has many through", "heroku", "paperclip", "json", "postman", "AJAX", "CORS", "CRUD", "mongoose", "bodyparser", "mkdir", "JWT", "bower", "package.json", "fork", "git pull", "mocha", "EJS", "variable", "function"]
}    

function resetAnimation(){
  document.getElementById("chosen_one").removeAttribute("class");
}

function namePicker(){
  //Random Color Generator
  var random1 = Math.floor(Math.random() * 9);
  var random2 = Math.floor(Math.random() * 3);
  var random3 = Math.floor(Math.random() * 3);

  //Name Picker
  //var namePick = wdi_16_names[Math.floor(Math.random() * wdi_16_names.length)]; 
  var namePick = wdi_16_names.splice(Math.floor(Math.random() * wdi_16_names.length), 1);
  var animatePick = [ "animated flipInX", "animated pulse", "animated rubberBand", "animated shake", "animated swing", "animated tada", "animated bounceIn", "animated rotateIn", "animated rotateIn", "animated flipInY"]
  
  //Display
  if (wdi_16_names.length > 0) {
    document.getElementById("chosen_one").innerHTML = (namePick);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#"+random1+random2+random3+random1+random2+random3;
    document.getElementById("chosen_one").setAttribute("class", animatePick[random1]);
  } else {
    resetNames();
  };
  //document.write(namePick);
  //document.getElementById("chosen_one").innerHTML = (namePick);
} 

function detectSpecialKeys(e){
    var evtobj=window.event? event : e
    if (evtobj.keyCode == 32) // || evtobj.ctrlKey || evtobj.shiftKey)
      namePicker();
}
document.onclick=namePicker();
