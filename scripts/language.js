let translates = {};
const languages = ['ru', 'kz', 'en'];

languages.forEach(lng => {
    const lngBtn = document.getElementById(lng);
    lngBtn.addEventListener('click', () => {
        changeLanguage(lng);
    })
})

function changeLanguage(lng) {
    async function getTranslates() {
        translates = await fetch(`./i18n/${lng}.json`)
            .then(response => response.json())
    }

    getTranslates().then(() => {
        for (let key in translates) {
            const el = document.getElementById(key);
            el && (el.innerText = translates[key]);
        }
        /* Сохраняем выбранный язык в локальную историю пользователя */
        localStorage.setItem('language', lng);
    })
}

/* Достаем из локальной историй измененный язык если он есть то меняем на нее иначе меняем на язык по умолчанию на англисский */
const language = localStorage.getItem('language');
language ? changeLanguage(language) : changeLanguage('en');

