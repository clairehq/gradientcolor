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

function randmColor() {
    var color = "#";
    for(var i = 0; i < 6; i++){
        color += Math.floor((Math.random() * 16)).toString(16);
  }
    return color;
  }

  mybutton.addEventListener('click', function(){
    //body.style.background = randmColor(); 
    body.style.backgeound = "linear-gradient(to right," + color + "," + color + ");";
    });