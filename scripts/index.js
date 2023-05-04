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

    // Register swiper
    new Swiper('.sign-up-banner', {
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
});

const navigations = [
    {id: 1, elementId: 'services', scrollTo: 'education_services'},
    {id: 2, elementId: 'about_us', scrollTo: 'education_about'},
    {id: 3, elementId: 'news', scrollTo: 'education-news'},
    {id: 4, elementId: 'contacts', scrollTo: ''},
    {id: 5, elementId: 'sign_up', scrollTo: 'education-sign-up'},
    {id: 6, elementId: 'banner-1-login', scrollTo: 'education-sign-up'},
    {id: 7, elementId: 'banner-2-login', scrollTo: 'education-sign-up'},
    {id: 8, elementId: 'sale', scrollTo: 'education-news'},
]

function addScrollEffects() {
    document.getElementById('home').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    document.getElementById('contacts').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    })
    navigations.forEach(item => {
        const scrollTo = document.getElementById(item.scrollTo);
        const addListener = document.getElementById(item.elementId);
        addListener.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({top: scrollTo.offsetTop - 100, behavior: "smooth"})
        })
    })
}

addScrollEffects();




