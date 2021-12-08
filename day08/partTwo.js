const fs = require('fs');
const data = fs.readFileSync('./test.txt',{encoding:'utf8', flag:'r'});
let readings = data.split('\n');

var correctOne = "ab";
var correctTwo = "gcdfa";
var correctThree = "fbcad";
var correctFour = "eafb";
var correctFive = "cdfbe";
var correctSix = "cdfgeb";
var correctSeven = "dab";
var correctEight = "acedgfb";
var correctNine = "cefabd";
var correctZero = "cagedb";

function mapSamples(inputs){
    let signalMap = {
        "a":"",
        "b":"",
        "c":"",
        "d":"",
        "e":"",
        "f":"",
        "g":""
    }

    inputs.split(' ').forEach(inp=>{
        let valid = ""
        if(inp.length==2){
            valid = correctOne;
        }
        if(inp.length==3){
            valid = correctSeven;
        }
        if(inp.length==4){
            valid = correctFour;
        }
        if(inp.length==7){
            valid = correctEight;
        }
        if(valid != ""){
            for(let i = 0;i<inp.length;i++){
                console.log("input "+inp)
                console.log("valid "+valid)
                console.log(inp[i]+" is coded to "+valid[i])
                signalMap[inp[i]]=valid[i]
            }
        }
    });
    console.log(signalMap)
    return signalMap;
}

function Decode(map,out){
    let output = "";
    out.split(' ').forEach(disp=>{
        let currStr = ""

        disp.split('').forEach(letter=>{
            currStr+=map[letter];
        })

        if(currStr == correctOne){
            output+="1"
        }else if(currStr==correctTwo){
            output+="2"
        }else if(currStr==correctThree){
            output+="3"
        }else if(currStr==correctFour){
            output+="4"
        }else if(currStr==correctFive){
            output+="5"
        }else if(currStr==correctSix){
            output+="6"
        }else if(currStr==correctSeven){
            output+="7"
        }else if(currStr==correctEight){
            output+="8"
        }else if(currStr==correctNine){
            output+="9"
        }else{
            output+="0"
        }
    });
    return output;
}

function getTotal(allInput){
    let total = 0;
    first = true;
    allInput.forEach(line=>{
        if(first){
            let map = mapSamples(line.split(" | ")[0]);
            let answer = Decode(map,line.split(' | ')[1]);
            first = false;
        }

    });
    return total;
}

console.log(getTotal(readings));