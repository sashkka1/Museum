import exploreImgChange from './explore.js';
import videoPlayer from './video.js';


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

const pictureGalary = document.querySelector(".gallery-img");
let arr = ['./assets/img/galery/galery1.jpg', './assets/img/galery/galery2.jpg', './assets/img/galery/galery3.jpg', './assets/img/galery/galery4.jpg', './assets/img/galery/galery5.jpg', './assets/img/galery/galery6.jpg', './assets/img/galery/galery7.jpg', './assets/img/galery/galery8.jpg', './assets/img/galery/galery9.jpg', './assets/img/galery/galery10.jpg', './assets/img/galery/galery11.jpg', './assets/img/galery/galery12.jpg', './assets/img/galery/galery13.jpg', './assets/img/galery/galery14.jpg', './assets/img/galery/galery15.jpg'];
arr.sort(() => Math.random() - 0.5);
arr.forEach(function (item) {
    const img = document.createElement('img');
    img.src = item;
    img.alt = "gallery img";
    console.log(img);
    pictureGalary.appendChild(img);
});
// const img = document.createElement("img");
// img.src = `./assets/img/galery/galery1.jpg`;
// img.alt = `galery1`;
// pictureGalary.append(img);

document.addEventListener('DOMContentLoaded', () => {
    exploreImgChange();
    videoPlayer();
});
