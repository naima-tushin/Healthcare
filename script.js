// Testimonial Starts
let currentSlideIndex = 0;

function currentSlide(n) {
    currentSlideIndex = n;
    updateSlide();
}

function updateSlide() {
    const cards = document.querySelector('.testimonial-cards');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = Math.ceil(cards.children.length / 3);

    cards.style.transform = `translateX(-${currentSlideIndex * 137 / totalSlides}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    dots[currentSlideIndex].classList.add('active');
});
// Testimonial Ends
// FAQ Section Starts
function toggleFAQ(element) {
    const faqAnswer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    const allAnswers = document.querySelectorAll('.faq-answer');
    const allArrows = document.querySelectorAll('.faq-question .arrow');
    allAnswers.forEach(answer => {
        if (answer !== faqAnswer) {
            answer.classList.remove('visible');
        }
    });
    allArrows.forEach(arrowElem => {
        if (arrowElem !== arrow) {
            arrowElem.innerHTML = '&#9661;';
        }
    });

    // Toggle the selected FAQ answer
    if (faqAnswer.classList.contains('visible')) {
        faqAnswer.classList.remove('visible');
        arrow.innerHTML = '&#9661;';
    } else {
        faqAnswer.classList.add('visible');
        arrow.innerHTML = '&#9651;';
    }
}
// FAQ Section Ends
