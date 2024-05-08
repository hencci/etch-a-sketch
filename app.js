const changesize = document.querySelector('#changeSize');
const erase = document.querySelector('#erase');
const container = document.querySelector('.container');

let grids = 16;

changesize.addEventListener("click", squareSize);
erase.addEventListener("click", clearGrid);

function squareSize() {
    let newSquares = prompt('Enter number of squares per side (between 1 - 100)');
    
    if (newSquares >= 1 && newSquares <= 100) {
        container.innerHTML = "";
        grids = newSquares;
        createGrids(newSquares);
    }
    else {
        return squareSize();
    }
}

function createGrids(squares) {
    const containerWidth = container.clientWidth;
    const squareSize = containerWidth / squares;
    for (let i = 1; i <= (squares * squares); i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", draw);
        container.appendChild(square);
    }
    
}

function draw(e){
    e.target.style.backgroundColor = "white";
}

function clearGrid() {
    container.innerHTML = "";
    createGrids(grids);
}

createGrids(grids);