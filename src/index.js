const fs = require('fs');

// Parsing input.txt file line by line
const inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');
const boardSize = inputData.slice(0, 1).toString().split(' ');
const start = inputData.slice(1, 2).toString().split(' ');
const dirtPatches = inputData.slice(2, inputData.length - 1);
const directions = inputData[inputData.length - 1].split('');

