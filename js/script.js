document.addEventListener('DOMContentLoaded', () => {
    // Initialize slider only if element exists
    const slider = document.querySelector('.slider');
    if (slider) initSlider();
});
  
function initSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider img');
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 3000);
}
  
// Google Maps Initialization
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
    // Add markers, events, etc.
}