//Starts with middle slides
// Next = counter +1
// Prev = counter -1

// My Code
var currentSlideindex = 1;
var slidesArray = Array.from(document.getElementsByClassName("project-slide"));

var nextSlide = document.querySelector(".next");
var prevSlide = document.querySelector(".prev");

function changeSlide(event) {
  slidesArray[currentSlideIndex].classList.remove("active");

  if(event.target.className.includes("prev")) {
    currentSlideIndex--;
    if(currentSlideIndex < 0) {
      currentSlideIndex = slidesArray.length - 1;
    }
  }

  else if(event.target.className.includes("next")) {
    currentSlideIndex++;
    if(currentSlideIndex >= slidesArray.length) {
      currentSlideIndex = 0;
    }
  }

  slidesArray[currentSlideIndex].className += " active";
}

  nextSlide.addEventListener("click", changeSlide);
  prevSlide.addEventListener("click", changeSlide);

// Alissa's Code
//
// var currentSlideIndex = 1;
// var slidesArray = Array.from(document.getElementsByClassName('project-slide'));
//
// var next = document.querySelector('.next');
// var prev = document.querySelector('.prev');
//
// function changeSlide(event){
//   console.log(event.target.className)
//
//   slidesArray[currentSlideIndex].classList.remove('active');
//
//   if(event.target.className.includes('prev')){
//     currentSlideIndex--;
//     if(currentSlideIndex < 0){ currentSlideIndex = slidesArray.length - 1; }
//   }
//
//   else if(event.target.className.includes('next')){
//     currentSlideIndex++;
//      if(currentSlideIndex >= slidesArray.length){ currentSlideIndex = 0; }
//   }
//   slidesArray[currentSlideIndex].className += ' active';
//   console.log(currentSlideIndex)
// }
//
// next.addEventListener('click', changeSlide);
// prev.addEventListener('click', changeSlide);
