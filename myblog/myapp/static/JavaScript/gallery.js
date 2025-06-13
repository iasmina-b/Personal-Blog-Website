let currentSlide = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(++currentSlide);
}

function prevSlide() {
    showSlide(--currentSlide);
}

window.onload = function() {
    showSlide(currentSlide);
};
