function limpiarNum() {
    document.getElementById('display').value = '0'; //Limpia el contenido a 0, básicamente es el clear, haha '-'.
}
function numeroAEnsenyar(value) { //En esto se hace la magia, se le pasa el valor al display, y si el display es 0, pues se le pasa el valor.
    var sound = new  Audio("meowrgh.mp3");  
    sound.play();
    let display = document.getElementById('display');
    if (display.value === '0') { //Si el display es 0
        display.value = value; //Si es solo 0, se queda como 0
    } else {
        display.value += value; //Si no es solo 0, entonces se puede añadir.
    }
}
function calcularResultado() {
    let display = document.getElementById('display'); //Pasa el display
    let result = eval(display.value); //Calculamos el resultado, eval seusa para evaluar la expresión como una matematica normal y así calcularla.
    display.value = result; //enseñamos el resultado
}

