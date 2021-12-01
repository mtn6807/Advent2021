const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split("\n");
let increaseCount = 0;
let decreaseCount = 0;
for(let i=0; i<readings.length; i++){
    if(i!=0){
        current = parseInt(readings[i]);
        prev = parseInt(readings[i-1]);
        if(current>prev){
            increaseCount++
        }else{
            decreaseCount++
        }
    }
}
console.log(increaseCount)