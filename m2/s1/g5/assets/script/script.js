let navbar = document.querySelector('nav');
let button = document.querySelector('.getStarted');

window.onscroll = function() {
    if (window.pageYOffset > 300) {
        navbar.classList.add('active')
        button.classList.add('active2')
    } else {
        navbar.classList.remove('active')
        button.classList.remove('active2')
    }
};

// ANIMAZIONE LETTERE

let letters = document.querySelectorAll('.animatedM svg g')

function selectRandom(x){
    return x[Math.floor(Math.random() * x.length)];
}

// aggiungo classe per farle sparire
function animateLetter(){
    let switchTrue = selectRandom(Array.from(letters));
    if(switchTrue.classList.contains('active3')){
        switchTrue.classList.remove('active3');
    }else{
        switchTrue.classList.add('active3');
    }
};
//attivo tutto
setInterval(animateLetter, 2);