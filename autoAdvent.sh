TOM=$(date -v +1d +'%d')
DIR=day$TOM
mkdir $DIR
cd $DIR
touch partOne.js
touch partTwo.js
touch input.txt

STARTCODE="const fs = require('fs');\nconst data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});\nlet readings = data.split('\\n');"
echo $STARTCODE >> partOne.js
