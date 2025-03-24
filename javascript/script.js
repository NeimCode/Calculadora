function limpiarNum() {
    document.getElementById('display').value = ''; //Limpia el contenido a 0, básicamente es el clear, haha '-'.
}



function numeroAEnsenyar(value) {
    var sound = new Audio("meowrgh.mp3");  
    sound.play();

    let display = document.getElementById('display');
    let ultimoCaracter = display.value.slice(-1);

    if (display.value === '0') {
        if (!['+', '*', '/', '-', '.'].includes(value)) {
            display.value = value;
        }
        return;
    }

    if (['+', '*', '/', '-', '.'].includes(value) && ['+', '*', '/', '-', '.'].includes(ultimoCaracter)) {
        return;
    }

    display.value += value;
}

function calcularResultado() {
    let display = document.getElementById('display'); //Pasa el display
    let result = eval(display.value); //Calculamos el resultado, eval seusa para evaluar la expresión como una matematica normal y así calcularla.
    display.value = result; //enseñamos el resultado
}

