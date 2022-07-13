
const gridDom = document.getElementById('grid');
const numeriUsati = [];

for (let i = 0; i < 64; i++) {

    const numeroCasuale = getUniqueRandomNumber(numeriUsati,1,64);
    numeriUsati.push(numeroCasuale);

    const currentElement = createGridSquare(numeroCasuale);

    currentElement.addEventListener('click', 
        function () {
            this.classList.toggle('clicked');
            //this.style.backgroundColor = 'yellow';
        }
    );

    gridDom.append(currentElement);
}


function getNumeroCasuale(min, max) {
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}

function getUniqueRandomNumber(listaNumeriUsati, min, max) {

   let numeroValido = false;
   let numeroCasualeCreato;

    while( numeroValido == false ) {
        numeroCasualeCreato = getNumeroCasuale( min, max);
        if (!( listaNumeriUsati.includes(numeroCasualeCreato))) {
            numeroValido = true;
        }
    }

    return numeroCasualeCreato;

}

function createGridSquare(numero) {

    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    if (numero % 2 == 0) {
        currentElement.classList.add('pari');
    } else {
        currentElement.classList.add('dispari');
    }

    const numberSquare = document.createElement('div');
    numberSquare.classList.add('square-number');
    numberSquare.append(numero);

    currentElement.append(numberSquare);

    return currentElement;

}