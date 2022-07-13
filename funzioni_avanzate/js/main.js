
/* document.getElementById('cliccami').addEventListener('click', 
    function () {
        console.log(this);
        this.style.color = 'red';
    }
);
 */

/* non funziona in quanto this punta al padre dell'elemento cliccato*/
document.getElementById('cliccami').addEventListener('click', 
    () => {
        console.log(this);
        this.style.color = 'red';
    }
);




/* const somma = function (n1, n2) {
    return n1 + n2;
}
 */

const somma = (n1, n2) => n1 + n2;
    
const elevaAlQuadrato = numero => numero * numero;





