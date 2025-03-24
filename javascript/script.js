function limpiarNum() {
    document.getElementById('display').value = '0'; //Limpia el contenido a 0, básicamente es el clear, haha '-'.
}




    function numeroAEnsenyar(value) { //En esto se hace la magia, se le pasa el valor al display, y si el display es 0, pues se le pasa el valor.
        var sound = new  Audio("meowrgh.mp3");  
        sound.play();
        let display = document.getElementById('display');
    let ultimoCaracter = display.value.slice(-1);
        if (display.value === '0') {
            display.value = value; 
        } else {
            if(['+', '*', '/', '-', '.'].includes(value) && ['+', '*', '/', '-', '.'].includes(ultimoCaracter)) {
                return;   
            }
            }
            display.value += value; 
        
        
    
    //Si hay un símbolo como +, *, - o /, nos interesa que no se repita consecutivamente, ya que no es lo mismo hacer 6--2, que -6-2
    //¿Entonces cómo podemos saberlo? que no se repita el numero... 
    

    
    
    
}
function calcularResultado() {
    let display = document.getElementById('display'); //Pasa el display
    let result = eval(display.value); //Calculamos el resultado, eval seusa para evaluar la expresión como una matematica normal y así calcularla.
    display.value = result; //enseñamos el resultado
}

