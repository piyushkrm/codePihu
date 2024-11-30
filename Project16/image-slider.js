
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(direction) {
  slideIndex += direction;
  showSlide(slideIndex);
}

// Auto slide every 3 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);

// Go back to the previous page
function goBack() {
    window.history.back("file:///F:/Projects/main/index.html");
}