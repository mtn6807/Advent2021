const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split("\n");

for(let i=0; i<readings.length; i++){
    readings[i] = parseInt(readings[i]);
}

increaseCount = 0
for(let i=0; i<readings.length; i++){
    if(!i<3){
        // this is a bad way to do a sliding window
        firstSum = readings[i-3]+readings[i-2]+readings[i-1];
        secondSum = readings[i-2]+readings[i-1]+readings[i];
        if(secondSum>firstSum){
            increaseCount++;
        }
    }
}
console.log(increaseCount)