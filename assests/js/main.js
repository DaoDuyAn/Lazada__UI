const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let slideIndex = 0;

showSlides();

function showSlides() {
    var bGC = ['rgb(133, 60, 254)', 'rgb(242, 33, 88)', 'rgb(172, 43, 185)', 'rgb(120, 195, 34)', 'rgb(2, 191, 169)'];
    const bannerSlide = $('.banner__slide');

    let i;
    let slides = $$(".mySlides");
    // let dots = $$('.dot');

    for (i = 0; i < slides.length; ++i) {
        slides[i].style.display = "none";
    }

    ++slideIndex;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // for (i = 0; i < dots.length; ++i) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    slides[slideIndex - 1].style.display = "block";
    bannerSlide.style.backgroundColor = bGC[slideIndex-1];
    // dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}



