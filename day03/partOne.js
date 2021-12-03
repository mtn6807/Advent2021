const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split("\n");

let binData = []
readings.forEach(number => {
    for(let i=0; i<number.length; i++){
        if(binData[i]==undefined){
            binData[i]={"one":0,"zero":0}
        }
        if(number[i]=='0'){
            binData[i]["zero"]++
        }else{
            binData[i]["one"]++
        }
    }
});

let gammaStr = "";
let epsilonStr = "";

binData.forEach(item =>{
    if(item["one"]>item["zero"]){
        gammaStr+="1";
        epsilonStr+="0";
    }else{
        gammaStr+="0";
        epsilonStr+="1";
    }
});

let gamma = parseInt(gammaStr, 2);
let epsilon = parseInt(epsilonStr,2);

console.log(gamma*epsilon)