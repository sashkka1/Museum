import exploreImgChange from './explore.js';
import videoPlayer from './video.js';
import randomGalary from './galery.js';


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






document.addEventListener('DOMContentLoaded', () => {
    exploreImgChange();
    videoPlayer();
    randomGalary();
});
