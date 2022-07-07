document.addEventListener('DOMContentLoaded', () => {

// create grid
var htmlString = "";
for(var i=0; i<200; i++){
    htmlString += '<div></div>'; // add 20x10 divs
}
var container = document.getElementById("grid");
container.innerHTML = htmlString; // set content of grid div as the 200 divs

// setting variables and putting grid into array
const grid = document.querySelector('#grid'); //assign const grid to grid divs
let squares = Array.from(document.querySelectorAll('#grid div'));
const scoreDisplay = document.querySelector('#score');
const startBtn = document.querySelector('#start-button');
const width = 10; // width of 1 row

// creating the tetrominoes
const lTetromino = [
    [1,width+1,width*2+1,2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
]

const tTetronimo = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
]

const zTetronimo = [
    [0,width,width+1,width*2+1],
    [width+1,width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1,width+2,width*2,width*2+1]
]
const oTetronimo = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
]

const iTetronimo = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
]

const tetrominos = [lTetromino, zTetronimo, tTetronimo, oTetronimo, iTetronimo]

// Starting position and random selection of tetrominos
let currentPos = 4;
let currentRotation = 0;
let randTetromino = Math.floor(Math.random()*tetrominos.length)
let current = tetrominos[randTetromino][0];

// draw tetromino
function draw() {
    current.forEach(index => {
        squares[currentPos + index].classList.add('tetromino')
    })
}

// undraw tetromino
function undraw() {
    current.forEach(index => {
        squares[currentPos + index].classList.remove('tetromino')
    })
}

})