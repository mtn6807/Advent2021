const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split("\n");

let depth = 0;
let horizontal = 0;

readings.forEach(instruction => {
    direction = instruction.split(' ')[0]
    vector = parseInt(instruction.split(' ')[1])

    if(direction=='up'){
        depth = depth-vector;
    }
    if(direction=='down'){
        depth = depth+vector;
    }
    if(direction=='forward'){
        horizontal = horizontal+vector;
    }
});

result = depth*horizontal;
console.log(result);