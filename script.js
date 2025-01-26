let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slidesToShow = 4; 
const track = document.querySelector('.carousel-track');

function showSlide(index) {
  const totalSlides = slides.length;
  
  if (index >= totalSlides) {
    currentSlide = 0; 
  } else if (index < 0) {
    currentSlide = totalSlides - slidesToShow; 
  } else {
    currentSlide = index;
  }

  
  const offset = -(currentSlide * 25); 
  track.style.transform = `translateX(${offset}%)`;  
}

function nextSlide() {
  showSlide(currentSlide + 1); 
}

function prevSlide() {
  showSlide(currentSlide - 1); 
}


showSlide(currentSlide);
