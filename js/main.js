import exploreImgChange from './explore.js';
import videoPlayer from './video.js';
import randomGalary from './galery.js';
import ticketsCounter from './buyTickets.js';
import map from './map.js';

// for work in my cv
document.addEventListener("click", () => {
    // проверяем, открыт ли уже нужный сайт

    if (window.parent.location.href !== "https://sashkka1.github.io/Museum/") {
        window.parent.location.href = "https://sashkka1.github.io/Museum/";
    }
    // если совпадает — ничего не делаем
});
// Свайпер Welcome
const swiper = new Swiper('.swiper-welcome', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    autoplay: {
        delay: 3000, // задержка между сменой слайдов (в мс)
        disableOnInteraction: false, // не останавливать после взаимодействия
    },
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





document.addEventListener('DOMContentLoaded', () => {
    exploreImgChange();
    videoPlayer();
    randomGalary();
    ticketsCounter();
    map();
});
