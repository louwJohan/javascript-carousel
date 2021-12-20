let carouselSlides = document.getElementsByClassName("carousel");
let nextButton = document.getElementsByClassName('button_right');
let prevButton = document.getElementsByClassName('button_left')
let slideWidth = carouselSlides[0].clientWidth;

for (let i = 0; i < carouselSlides.length; i++){
    carouselSlides[i].style.left = slideWidth * i +'px';
}

// Button to move carousel right//
nextButton.addEventListener('click', e => {
    let currentSlide = document.getElementsByClassName('current_slide');
    console.log(currentSlide);
 } 
)