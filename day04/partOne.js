var util = require('util');
const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split('\n');

function getBoards(input){
    let boards = []
    let currentBoard = []
    let boardRow = 0;
    for(let i=0;i<input.length;i++){
        if(input[i]!=''){
            let row = input[i].split(' ').filter(x=>{
                return x != '';
            })
            currentBoard.push(row)
            if(boardRow==4){
                boards.push(currentBoard);
                currentBoard = []
            }
            boardRow = (boardRow+1)%5;
        }
    }
    return boards;
}

function replaceNum(num,board){
    for(let x=0;x<board.length;x++){
        for(let y =0;y<board.length;y++){
            if(board[x][y]==num){
                board[x][y]='X'
            }
        }
    }
    return board;
}

function isWinner(board){
    let winner = false;
    // check col
    board.forEach(col =>{
        if(col.every( v => v === 'X')){
            winner = true;
        }
    });
    // check row
    let rows = []
    for(let i = 0;i<board[0].length;i++){
        row = []
        board.forEach(x=>{
            row.push(x[i])
        });
        if(row.every( v => v === 'X')){
            winner = true;
        }
    }
    return winner;
}

function findWinningBoard(drawings, boards){
    let winningBoard = null;
    let numsDrawn = []
    drawings.some(draw => {
        numsDrawn.push(draw)
        for(let b=0;b<boards.length;b++){
            newBoard = replaceNum(draw,boards[b]);
            if(isWinner(newBoard)){
                winningBoard = newBoard;
                return true
            }
            boards[b]=newBoard;
        }
    });
    return {"board":winningBoard,"final":numsDrawn[numsDrawn.length-1]}
}

let drawings = readings[0].split(',');
readings.splice(0,1);
let boards = getBoards(readings);
let winningObj = findWinningBoard(drawings,boards);

let winningSum = 0;
winningObj["board"].forEach(outer=>{
    outer.forEach(inner=>{
        if(inner!='X'){
            winningSum += parseInt(inner);
        }
    })
})
console.log(winningSum*parseInt(winningObj["final"]));