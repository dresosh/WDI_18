var wdi_18_names = ["Adam", "Alex", "Andre", "Brian", "Greg", "Jeff", "Julie", "Kayla", "Kyle", "Leslie","Noah", "Paul", "Percy", "Steve"];

function eachName(){
    var namePicker = wdi_18_names[Math.floor(Math.random() * wdi_18_names.length)];
    console.log(namePicker);
}