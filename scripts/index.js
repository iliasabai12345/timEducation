window.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const backdrop = document.getElementById('menu-backdrop');

    menuBtn.addEventListener('click', () => {
        backdrop.style.display = 'block';
        menu.style.transform = 'translateX(300px)';
    });

    backdrop.addEventListener('click', () => {
        menu.style.transform = 'translateX(0)';
        const time = setTimeout(() => {
            clearTimeout(time);
            backdrop.style.display = 'none';
        }, 250)
    })
});
const swiper = new Swiper('.sign-up-banner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,

    // Autoplay
    autoplay: {
        delay: 3000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
