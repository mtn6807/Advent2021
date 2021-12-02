const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split("\n");

let depth = 0;
let horizontal = 0;
let aim =0;

readings.forEach(instruction => {
    direction = instruction.split(' ')[0]
    vector = parseInt(instruction.split(' ')[1])

    if(direction=='up'){
        aim = aim - vector;
    }
    if(direction=='down'){
        aim = aim + vector;
    }
    if(direction=='forward'){
        horizontal = horizontal+vector;
        depth = depth + (aim*vector)
    }
});

result = depth*horizontal;
console.log(result);