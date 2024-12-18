// JavaScript to handle carousel sliding
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const carouselSlide = document.querySelector('.carousel-slide');

// Function to show the next image
nextButton.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first image
  }
  updateCarousel();
});

// Function to show the previous image
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1; // Loop to the last image
  }
  updateCarousel();
});

// Update the carousel position
function updateCarousel() {
  carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Disable/enable the navigation buttons based on the current index
  if (currentIndex === 0) {
    prevButton.setAttribute('disabled', 'true'); // Disable the previous button if we're at the first image
  } else {
    prevButton.removeAttribute('disabled'); // Enable the previous button
  }

  if (currentIndex === totalImages - 1) {
    nextButton.setAttribute('disabled', 'true'); // Disable the next button if we're at the last image
  } else {
    nextButton.removeAttribute('disabled'); // Enable the next button
  }
}

// Initialize carousel buttons on page load
updateCarousel();
