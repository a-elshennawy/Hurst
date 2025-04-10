// slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

showSlide(currentSlide);

// upBtn
const upBtn = document.querySelector('.upBtn');

// hide the btn or show it
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        upBtn.style.opacity = '1';
    } else {
        upBtn.style.opacity = '0';
    }
});

// functionality
upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// the headerbar
const headBar = document.querySelector('.headBar');

// adjust scroll with background color and height (padding)
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        headBar.style.backgroundColor = '#afa9a957';
        headBar.style.backdropFilter = 'blur(10px)';
        headBar.style.padding = '20px 0px'

    } else {
        headBar.style.backgroundColor = '#fff';
        headBar.style.backdropFilter = 'none';
        headBar.style.padding = '30px 0px'
    }
});
