// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    slides.forEach(slide => slide.style.display = 'none'); // Hide all images
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0; // Loop back to first slide
    slides[currentSlide].style.display = 'block'; // Show the current slide
}

// Initialize by showing the first slide
changeSlide();
setInterval(changeSlide, 3000); // Change image every 3 seconds

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Show the button when scrolling down
window.onscroll = function () {
    const button = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Scroll to top when button is clicked
document.getElementById("scrollTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
