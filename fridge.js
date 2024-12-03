// const track = document.querySelector('.carousel-track');
// const prevButton = document.getElementById('prevBtn');
// const nextButton = document.getElementById('nextBtn');

// let currentIndex = 0;

// // Update the carousel's position
// function updateCarousel() {
//   const itemWidth = document.querySelector('.carousel-item').clientWidth;
//   track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
// }

// // Move to the previous item
// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + 25) % 25; // Wrap around to the last item
//   updateCarousel();
// });

// // Move to the next item
// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % 25; // Wrap around to the first item
//   updateCarousel();
// });
const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

let currentIndex = 0;
const itemsToShow = 3; // Number of items displayed at once
const totalItems = document.querySelectorAll('.carousel-item').length;

// Update the carousel's position
function updateCarousel() {
  const itemWidth = document.querySelector('.carousel-item').clientWidth;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Move to the previous set of items
prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - itemsToShow, 0); // Ensure index doesn't go below 0
  updateCarousel();
});

// Move to the next set of items
nextButton.addEventListener('click', () => {
  currentIndex = Math.min(
    currentIndex + itemsToShow,
    totalItems - itemsToShow // Prevent moving past the last set of items
  );
  updateCarousel();
});
