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
        };
        this.board[yPos][xPos] = 'hoover';
    }
    //placing dirt patches to the board
    placeDirt(xPos, yPos) {
        let maxX = this.columnsLength - 1;
        let maxY = this.rowsLength - 1;
        //need to check if dirt is in valid position
        if (xPos > maxX || xPos < 0 || yPos > maxY || maxY < 0) {
            console.log('Can not place dirt patches on board');
        }
        let boardPos = this.board[yPos][xPos];
        if (boardPos !== 'dirt' && boardPos !== 'hoover') {
            this.board[yPos][xPos] = 'dirt';
        } else {
            console.log('dirt patch is already placed on that position');
        }
    }
    //adding dirt to board
    addDirt(dirtPatches) {
        for (let i = 0; i < dirtPatches; i++) {
            let dirtPatch = dirtPatches[i].split(' ');
            this.placeDirt(parseInt(dirtPatch[0]), dirtPatch[1]);
        }
    }
    //clean dirt patches on board
    cleanDirt(xPos, yPos) {
        if (this.board[yPos][xPos] === 'dirt') {
            this.dirtClean++;
        }
        this.hooveringPosition(xPos, yPos);
    }
    moveRoomba(directions) {
        switch (directions) {
        //move north
        case 'N' || 'n': {
            let xPos = this.hooveringPosition.x;
            let yPos = this.hooveringPosition.y + 1;
            //check if move is possible
            if (yPos > this.rowsLength - 1) {
                console.log('Roomba can not move north from that position');
            } else {
                //call cleanDirt function to see if it cleaned a dirt patch
                this.cleanDirt(xPos, yPos);
            }
            break;
        }
        case 'E' || 'e': {
            let xPos = this.hooveringPosition.x + 1;
            let yPos = this.hooveringPosition.y;
            if (xPos > this.columnsLength - 1) {
                console.log('Roomba can not move east from that position');
            } else {
                //call cleanDirt function to see if it cleaned a dirt patch
                this.cleanDirt(xPos, yPos);
            }
            break;
        }
        case 'S' || 's': {
            let xPos = this.hooveringPosition.x;
            let yPos = this.hooveringPosition.y - 1;
            if (yPos < 0) {
                console.log('Roomba can not move south from that position');
            } else {
                //call cleanDirt function to see if it cleaned a dirt patch
                this.cleanDirt(xPos, yPos);
            }
            break;
        }
        case 'W' || 'w': {
            let xPos = this.hooveringPosition.x -1;
            let yPos = this.hooveringPosition.y;
            if (xPos < 0) {
                console.log('Roomba can not move west from that position');
            } else {
                //call cleanDirt function to see if it cleaned a dirt patch
                this.cleanDirt(xPos, yPos);
            }
            break;
        }
        default:
        }
    }
}