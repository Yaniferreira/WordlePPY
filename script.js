let intentos = 6;
let palabra = "APPLE";
window.addEventListener('load', init)
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value;
function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)

    intentos--
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")
    }
}
button.addEventListener("click", intentar);
function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}


