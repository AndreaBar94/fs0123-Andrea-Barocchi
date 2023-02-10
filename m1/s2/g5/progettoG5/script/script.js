let screen = document.querySelector('#display');

function buttonV(elemento){   
    let simbolo = elemento.getAttribute('data-s');

    let display = screen;

    display.value += simbolo;
}

function operation(){
    let display = screen;

    display.value = eval(display.value);
}

function cancella(){
    screen.value = ""
}

function del(){
    screen.value = screen.value.substring(0,screen.value.length -1)
}

function sqrt(){
    display.value = Math.sqrt(display.value)
}

function pi(){
    display.value = Math.PI
}

function square(){
    display.value = Math.pow(display.value, 2)
}
