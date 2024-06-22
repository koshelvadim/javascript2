const lightThemeClass = 'light-theme';
const darkThemeClass = 'dark-theme';
const themeKey = 'theme';

function applyTheme(theme) {
    document.body.classList.remove(lightThemeClass, darkThemeClass);
    document.body.classList.add(theme);
}

function switchTheme() {
    const currentTheme = localStorage.getItem(themeKey) || lightThemeClass;
    const newTheme = currentTheme === lightThemeClass ? darkThemeClass : lightThemeClass;
    localStorage.setItem(themeKey, newTheme);
    applyTheme(newTheme);
}

function initializeTheme() {
    const saveTheme = localStorage.getItem(themeKey) || lightThemeClass;
    applyTheme(saveTheme);
}

initializeTheme();

const button = document.querySelector('button');

button.addEventListener('click', switchTheme);