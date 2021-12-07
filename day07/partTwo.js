const fs = require('fs');
const _ = require('lodash')
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split(',');
let nums = [];
readings.forEach(x => nums.push(parseInt(x)))

function getFuel(crabs,point){
    let fuel = 0;
    crabs.forEach(crab=>{
        let dist = Math.abs(point-crab);
        fuel+=dist*(dist+1)/2;
    })
    return fuel;
}

let highest = Math.max(...nums);
let lowest = getFuel(nums,highest);
let range = _.range(0,highest+1);
range.forEach(pos=>{
    let dist = getFuel(nums,pos);
    if(dist<lowest){
        lowest = dist;
    }
});

console.log(lowest)