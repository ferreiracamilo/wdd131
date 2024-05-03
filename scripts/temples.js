const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    // Check screen width to remove the class open that works for the collapsible menu
    if (window.innerWidth >= 900) {
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    } else {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    }
});