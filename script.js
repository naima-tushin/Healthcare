function toggleFAQ(element) {
    const faqAnswer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    if (faqAnswer.classList.contains('visible')) {
        faqAnswer.classList.remove('visible');
        arrow.innerHTML = '&#9660;';
    } else {
        faqAnswer.classList.add('visible');
        arrow.innerHTML = '&#9650;';
    }
}


let currentSlideIndex = 0;

function currentSlide(n) {
  currentSlideIndex = n;
  updateSlide();
}

function updateSlide() {
  const cards = document.querySelector('.testimonial-cards');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = Math.ceil(cards.children.length / 3);

  cards.style.transform = `translateX(-${currentSlideIndex * 100 / totalSlides}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlideIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.dot');
  dots[currentSlideIndex].classList.add('active');
});




document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

