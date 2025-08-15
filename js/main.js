import exploreImgChange from './explore.js';
import videoPlayer from './video.js';
import randomGalary from './galery.js';
import ticketsCounter from './buyTickets.js';


// Свайпер Welcome
const swiper = new Swiper('.swiper-welcome', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.main-pagination',
        clickable: true,
    },
    on: {
        init: function () {
            updateFraction(this);
        },
        slideChange: function () {
            updateFraction(this);
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        // el: '.swiper-scrollbar',
    },
});
// Свайпер Video
const swiperVideo = new Swiper('.swiper-video', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 42,
    loop: true,
    // If we need pagination
    pagination: {
        el: '.main-pagination-video',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
function updateFraction(swiperInstance) {
    const current = swiperInstance.realIndex + 1;
    const total = swiperInstance.slides.length;
    document.querySelector('.fraction-pagination').textContent = `${current} / ${total}`;
}


console.log('asdas');

// const valueBasicBook = document.getElementById("book-basic-value");
// const valueSeniorBook = document.getElementById("book-senior-value");
// document.getElementById("book-basic-increase").addEventListener("click", () => {
//     valueBasicBook.textContent++;
// });
// console.log('asdas');
// document.getElementById("book-basic-decrease").addEventListener("click", () => {
//     if (valueBasicBook.textContent > 0) {
//         valueBasicBook.textContent--;
//     }
// });
// document.getElementById("book-senior-increase").addEventListener("click", () => {
//     valueSeniorBook.textContent++;
// });
// document.getElementById("book-senior-decrease").addEventListener("click", () => {
//     if (valueSenior.textContent > 0) {
//         valueSenior.textContent--;
//     }
// });



document.addEventListener('DOMContentLoaded', () => {
    exploreImgChange();
    videoPlayer();
    randomGalary();
    ticketsCounter();
});
