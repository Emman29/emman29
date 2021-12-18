//Code dependent on time of day//
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "Good Evening! My name is...";
} else if (hourNow > 12){
  greeting = "Good afternoon! I'm...";
} else if (hourNow > 10){
  greeting = "Morning! This is...";
} else if (hourNow > 0){
  greeting = "Good Early Morning. I'm...";
}

var greet = document.getElementById('hello');
greet.textContent = greeting;

$(function() {
  $('main').hide().slideDown();
  var $main = $('main');
  $main.hide().each(function(index){
    $(this).delay(700*index).fadeIn(700);
  });
})
