var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

css.textContent = body.style.background = "linear-gradient(to right, rgb(255,0,0) , rgb(255,255,0));";

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// random color
var button = document.getElementById("mybutton");

function randomColor() {
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += Math.floor((Math.random() * 16)).toString(16);
  }
    return color;
  }

button.addEventListener('click', function(){
    var color1 = randomColor();
    var color2 = randomColor();
    body.style.background = "linear-gradient(to right," + color1 + "," + color2 + ")";
});