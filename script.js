
let current = 0;
const images = ["mockup1.png", "mockup2.png", "mockup3.png", "mockup4.png"];

function changeSlide(direction) {
  current = (current + direction + images.length) % images.length;
  document.getElementById("mockupImage").src = images[current];
}

function scrollToMockups() {
  document.getElementById("mockup-section").scrollIntoView({ behavior: 'smooth' });
}
