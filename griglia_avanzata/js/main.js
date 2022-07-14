
// prendo l'elemento principale che rappresenta la griglia
const gridDom = document.getElementById('grid');

// creo una lista per tenere traccia dei numeri che già ho usato
const numeriUsati = [];

for (let i = 0; i < 64; i++) {

    //genero un nuovo numero casuale non contenuto nella lista di quelli già usati
    const numeroCasuale = getUniqueRandomNumber(numeriUsati,1,64); 

    // ...e lo inserisco nella lista dei numeri usati
    numeriUsati.push(numeroCasuale);

    // creo un singolo quadrato
    const currentElement = createGridSquare(numeroCasuale);

    // aggiungo l'evento di click e i suoi effetti
    currentElement.addEventListener('click', 
        function () {
            this.classList.toggle('clicked');
            //this.style.backgroundColor = 'yellow';
        }
    );

    // infine lo aggiungo alla griglia
    gridDom.append(currentElement);
}


//genera un numero casuale compreso tra min e max
function getNumeroCasuale(min, max) {
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}
 
//genera un numero casuale che non sia compreso nella lista dei numeri usati e compreso tra min e max
function getUniqueRandomNumber(listaNumeriUsati, min, max) {

    // creo una variabile che preinizializzo a false e che tenga traccia del fatto che il numero che ho generato sia unico o meno
    let numeroValido = false;

    // e mi creo una variabile che mi ospiti il valore casuale creato
    let numeroCasualeCreato;

    //fintanto che non ho generato un numero valido ripeto questo blocco di codice
    while( numeroValido == false ) { // identico a !numeroValido
        numeroCasualeCreato = getNumeroCasuale( min, max); // genero un nmero a caso

        // e verifico che non sia contenuto nell'array dei numeri già usati. Se non lo è, il numero creato è valido, quindi fermo il ciclo
        if (listaNumeriUsati.includes(numeroCasualeCreato) == false) { //identico a !listaNumeriUsati.includes(numeroCasualeCreato)
            numeroValido = true;
        }
    }
    // e torno il numero trovato
    return numeroCasualeCreato;

}


function createGridSquare(numero) {

    //creo un elemento del dom di tipo div con classe square
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    //...se il numero è pari
    if (numero % 2 == 0) {
        currentElement.classList.add('pari'); // aggiungo all'elemento del dom appena creato la classe pari
    } else {
        currentElement.classList.add('dispari'); // aggiungo all'elemento del dom appena creato la classe dispari
    }

    // creo un nuovo elemento del dom di tipo div con classe square-number, nel quale all'interno scrivo il numero
    const numberSquare = document.createElement('div');
    numberSquare.classList.add('square-number');
    numberSquare.append(numero);

    // e metto l'emento con classe square-div dentro il div con classe square
    currentElement.append(numberSquare);


    // infine ritorno il div con classe square e relativo figlio square-number
    return currentElement;

}