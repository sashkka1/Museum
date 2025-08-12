import exploreImgChange from './explore.js';



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
});

let video = document.getElementById('myVideo');
let poster = document.getElementById('poster-for-video');
let source = video.querySelector('source');
let slides = document.querySelectorAll('.swiper-slide');
let playIcon = document.getElementById('play-icon');
let pauseIcon = document.getElementById('pause-icon');
let progress = document.getElementById('progress');
let volumeIcon = document.getElementById('volume-icon');
let muteIcon = document.getElementById('mute-icon')
let volumeSlider = document.getElementById('volume');
let fullscreenBtn = document.getElementById('fullscreen');

poster.addEventListener('click', () => {
    poster.style.display = 'none';
    video.style.display = 'inline';
    source.src = "./assets/video/video0.mp4";
    video.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
});

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        poster.style.display = 'none';
        video.style.display = 'inline';
        source.src = slide.id;
        video.load();
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    });
});


// разобраться с тем почему ползунок на центре появляется и при переходе на другие видосы чтобы тоже постер показывался
// ▶ / ⏸
playIcon.addEventListener('click', () => {
    video.play();
    poster.style.display = 'none';
    video.style.display = 'inline';
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
});
video.addEventListener('click', () => {
    if (video.paused) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
});
pauseIcon.addEventListener('click', () => {
    video.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
});


// Позволяем пользователю перематывать видео вручную
progress.addEventListener('input', () => {
    const value = progress.value;
    video.currentTime = (value / 100) * video.duration;
    console.log('progress - ', progress);
});
progress.addEventListener('input', () => {
    let value = progress.value;
    progress.style.background = `
    linear-gradient(to right,
    #710707 0%,
    #710707 ${value}%,
    #C4C4C4 ${value}%,
    #C4C4C4 100%)`;
    value = (progress.value / 100) * video.duration;
    video.currentTime = value;
});
// Обновляем ползунок при воспроизведении
video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100;
    progress.value = value;
    progress.style.background = `linear-gradient(to right,
        #710707 0%,
        #710707 ${value}%,
        #C4C4C4 ${value}%,
        #C4C4C4 100%)`;
});


// Громкость
volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
    volumeSlider.style.background = `linear-gradient(to right,
        #710707 0%,
        #710707 ${video.volume * 100}%,
        #C4C4C4 ${video.volume * 100}%,
        #C4C4C4 100%)`;
    if (video.volume === 0) {
        if (!video.muted) {
            video.muted = !video.muted;
        }
        volumeIcon.style.display = 'none';
        muteIcon.style.display = 'inline';
    } else {
        if (video.muted) {
            video.muted = !video.muted;
        }
        volumeIcon.style.display = 'inline';
        muteIcon.style.display = 'none';
    }
});
// кнопка мьюта
volumeIcon.addEventListener('click', () => {
    if (!video.muted) {
        video.muted = !video.muted;
    }
    volumeIcon.style.display = 'none';
    muteIcon.style.display = 'inline';
});
muteIcon.addEventListener('click', () => {
    if (video.muted) {
        video.muted = !video.muted;
    }
    volumeIcon.style.display = 'inline';
    muteIcon.style.display = 'none';
});

// Полный экран
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
        video.play();
        poster.style.display = 'none';
        video.style.display = 'inline';
    } else {
        document.exitFullscreen();
    }
});