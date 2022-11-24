"use strict";
const playerFactory = (name, index) => {
    return {name, index};
}

const playerOne = playerFactory('Player "X"', 'X');
const playerTwo = playerFactory('Player "O"', 'O');
let playerturn = playerOne
let gameEnd = false
function changeTurn(){
    if (playerturn == playerOne){
        playerturn = playerTwo
    }
    else {
        playerturn = playerOne
}}

const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const gameBoard = (() => {
    let board = []
    for (let i=0; i<9;i++){
        board[i] = ""}
    let gameboard = document.querySelector('.gameboard');
    let square = null
    for (let i=0;i < board.length; i++){
        square = document.createElement('div');
        square.className = 'square';
        square.textContent = board[i];
        gameboard.appendChild(square);}  
    Array.from(gameboard.children).forEach((square, index) => {
        square.addEventListener('click', () => {
        if (square.textContent == "" && gameEnd == false ){
        board[index] = playerturn.index
        square.textContent = board[index]
        checkWinner()
        changeTurn()}
    })})
    
    return {board}
})();

function checkWinner() {
    winCondition.forEach((item, index) => { // [0, 1, 2, 3, 4, 5, 6, 7]
        if (gameBoard.board[item[0]] === playerturn.index && gameBoard.board[item[1]] === playerturn.index && gameBoard.board[item[2]] === playerturn.index) {
            let alert = document.querySelector('.alert');
            let winAlert = document.createElement('div');
            alert.appendChild(winAlert);
            winAlert.textContent = playerturn.name + " Wins!";
            console.log('winner!');
            gameEnd = true
           } 
        })}


