let carouselSlides = document.getElementsByClassName("carousel");
let nextButton = document.querySelector('.button_right');
let prevButton = document.querySelector('.button_left')
let slideWidth = carouselSlides[0].clientWidth;
let carouselTrack = document.querySelector('.carousel_track');


for (let i = 0; i < carouselSlides.length; i++){
   carouselSlides[i].style.left = slideWidth * i +'px';
}

// Button make carousel move left//
prevButton.addEventListener('click', e => {
   let currentSlide = document.querySelector('.current_slide');
   let nextSlide = currentSlide.previousElementSibling;
   let moveAmount = nextSlide.style.left;
   carouselTrack.style.transform = 'translateX(-'+ moveAmount +')';
   currentSlide.classList.remove('current_slide')
   nextSlide.classList.add('current_slide')
} 
)
// Button to move carousel right//
nextButton.addEventListener('click', e => {
    let currentSlide = document.querySelector('.current_slide');
    let nextSlide = currentSlide.nextElementSibling;
    let moveAmount = nextSlide.style.left;
    carouselTrack.style.transform = 'translateX(-'+ moveAmount +')';
    currentSlide.classList.remove('current_slide')
    nextSlide.classList.add('current_slide')
 } 
)