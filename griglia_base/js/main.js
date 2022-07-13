
const gridDom = document.getElementById('grid');


for (let i = 0; i < 64; i++) {

    const currentElement = createGridSquare();

    currentElement.addEventListener('click', 
        function () {
            this.classList.toggle('clicked');
            //this.style.backgroundColor = 'yellow';
        }
    );

    gridDom.append(currentElement);
}











function createGridSquare() {

    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    return currentElement;

}