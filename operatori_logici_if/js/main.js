
let pippo = true;

let myArray = [ 1,2,3];

if ( !myArray.includes(2) ) {
    //istruzioni da eseguire
} 


let prova = 'oscviodsgoidoij';

if (prova) {
    alert('codice eseguito');
}


// operatore ternario
const risultato = pippo?'vero':'non vero';

// equivale a scrivere
let risultatoIf;

if (pippo) {
    risultatoIf = 'vero';
} else {
    risultatoIf = 'non vero';
}












let numeroDaTestare = 55;



let risultatoIfNumerico;

if (numeroDaTestare == 55) {
    risultatoIfNumerico = "E'vero!";
} else {
    risultatoIfNumerico = 'Non è vero!';
}

console.log(risultatoIfNumerico);



console.log((numeroDaTestare == 55)?"E'vero!":'Non è vero!');