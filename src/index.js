const fs = require('fs');

// Parsing input.txt file line by line
const inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');
const boardSize = inputData.slice(0, 1).toString().split(' ');
const start = inputData.slice(1, 2).toString().split(' ');
const dirtPatches = inputData.slice(2, inputData.length - 1);
const directions = inputData[inputData.length - 1].split('');

class Roomba {
    constructor(rows = 5, columns = 5) {
        this.board = Roomba.createBoard(rows, columns);
        this.rowsLength = rows;
        this.columnsLength = columns;
        this.dirtClean = 0;
    }
    //initialize board
    static createBoard(rows, columns) {
        let board = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < columns; j++) {
                row.push(' ');
            }
            board.push(row);
        }
        return board;
    }
    //tracking movements
    hooveringPosition(xPos, yPos) {
        this.hooverPos = {
            x: xPos,
            y: yPos
        }
        this.board[yPos][xPos] = 'hoover';
    }


}