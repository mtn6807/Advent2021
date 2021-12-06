const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split('\n');

function generateFish(input){
    let startingFish = input[0].split(',');
    let fishySimulator = [];
    startingFish.forEach(element => {
        fishySimulator.push({"days":parseInt(element),"new":false});
    });
    return fishySimulator;
}

function nextDay(fishies){
    let newFishies = []
    fishies.forEach(fish=>{
        fish.days=fish.days-1;
        if(fish.days==-1){
            fish.days = 6;
            newFishies.push({"days":8,"new":true})
        }
    });
    return fishies.concat(newFishies);
}

function simulateDays(days,fishies){
    for(i=0;i<days;i++){
        fishies = nextDay(fishies);
    }
    return fishies;
}

let ocean = generateFish(readings);
console.log(simulateDays(80,ocean).length);