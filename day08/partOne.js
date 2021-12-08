const fs = require('fs');
const data = fs.readFileSync('./test.txt',{encoding:'utf8', flag:'r'});
let readings = data.split('\n');


let one = 0;
let four = 0;
let seven = 0;
let eight = 0;
readings.forEach(display => {
    signals = display.split(" | ")[0];
    output = display.split(" | ")[1];
    output.split(' ').forEach(out=>{
        if(out.length==2){
            one++;
        }
        if(out.length==3){
            seven++;
        }
        if(out.length==4){
            four++;
        }
        if(out.length==7){
            eight++;
        }
    })
})
console.log(one+four+seven+eight)
