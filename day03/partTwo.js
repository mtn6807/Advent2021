const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split("\n");

function getFrequency(rawbin){
    let binData = []
    rawbin.forEach(number => {
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
    return binData
}

function getOxReading(origionalData){
    let oxReadings = origionalData;
    let dataLen = readings[0].length;
    let ox = 0;

    for(let i = 0; i<dataLen; i++){
        if(oxReadings.length==1){
            ox = parseInt(oxReadings[0],2);
            return ox;
        }

        let freq = getFrequency(oxReadings);
        commonBit = "1";
        if(freq[i]["zero"]>freq[i]["one"]){
            commonBit = "0"
        }

        let newDataList = []
        oxReadings.forEach(num=>{
            if(num[i]==commonBit){
                newDataList.push(num)
            }
        });
        oxReadings = newDataList;
    }
    return ox;
}


function getCoReading(origionalData){
    let coReadings = origionalData;
    let dataLen = readings[0].length;
    let co = 0;

    for(let i = 0; i<dataLen; i++){
        if(coReadings.length==1){
            co = parseInt(coReadings[0],2);
            return co;
        }

        let freq = getFrequency(coReadings);
        commonBit = "0";
        if(freq[i]["zero"]>freq[i]["one"]){
            commonBit = "1"
        }

        let newDataList = []
        coReadings.forEach(num=>{
            if(num[i]==commonBit){
                newDataList.push(num)
            }
        });
        coReadings = newDataList;
    }
    return co;
}

oxReading = getOxReading(readings);
coReading = getCoReading(readings);

console.log(oxReading*coReading)