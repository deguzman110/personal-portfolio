// nav responsiveness

function myFunction() {
  var x = document.querySelectorAll("nav li");
  if (x.className === "nav li") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
};

var hamburgerMenu = document.querySelector('.hamburger');
var navDropdown = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', function(){
  navDropdown.classList.toggle('opened');
})
