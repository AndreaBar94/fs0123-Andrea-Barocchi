let navbar = document.querySelector('nav');
let button = document.querySelector('.getStarted');

window.onscroll = function() {
    if (window.pageYOffset > 200) {
        navbar.classList.add('active')
        button.classList.add('active2')
    } else {
        navbar.classList.remove('active')
        button.classList.remove('active2')
    }
};