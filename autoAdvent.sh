TOM=$(date -v +1d +'%d')
DIR=day$TOM
mkdir $DIR
cd $DIR
touch partOne.js
touch partTwo.js

START = "const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split("\n");"

echo $START >>partOne.js