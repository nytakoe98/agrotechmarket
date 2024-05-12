let currentIndex = 0;
const slides = document.querySelectorAll('.slider');
const slideInterval = 6000;
 
function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}

slides[currentIndex].classList.add('active');
 
setInterval(changeSlide, slideInterval);