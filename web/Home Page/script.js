const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const spans = document.querySelectorAll('.hamburger span');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  spans.forEach(span => {
    span.classList.toggle('toggle');
  });
});
