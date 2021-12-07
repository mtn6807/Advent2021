const fs = require('fs');
const _ = require('lodash')
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split(',');
let nums = [];
readings.forEach(x => nums.push(parseInt(x)))

function getDistance(crabs,point){
    let distance = 0;
    crabs.forEach(crab=>{
        let dist = Math.abs(point-crab);
        distance+=dist;
    })
    return distance;
}

let highest = Math.max(...nums);
let lowest = getDistance(nums,highest);
let range = _.range(0,highest+1);
range.forEach(pos=>{
    let dist = getDistance(nums,pos);
    if(dist<lowest){
        lowest = dist;
    }
});

console.log(lowest)