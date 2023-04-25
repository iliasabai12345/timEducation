window.addEventListener("DOMContentLoaded", (event) => {
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
