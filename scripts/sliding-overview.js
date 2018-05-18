// Script for overview-slideshow in projects files

var slideIndex = 1;
showSlides(slideIndex);

//Next & Previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Current Slide controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementByClassName("mySlides");
  var dots = document.getElementByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; 1 < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slidesIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
