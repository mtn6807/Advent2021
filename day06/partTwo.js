const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split('\n');

function generateFish(input){
    let startingFish = input[0].split(',');
    let fishySimulator = [];
    startingFish.forEach(element => {
        fishySimulator.push(parseInt(element));
    });
    return fishySimulator;
}

function totalFish(fish, days){
    if(days<fish+1){
        return 1;
    }
    return totalFish(6,days-(fish+1)) + totalFish(8,days-(fish+1))

}

let fishies = generateFish(readings);
var total = 0;
totals = {1:0,2:0,3:0,4:0,5:0,6:0}
for(let i = 1;i<7;i++){
    console.log((i/7)*100+"%");
    totals[i] = totalFish(i,256);
}

fishies.forEach(fish=>{
    total+=totals[fish];
});
console.log(total);