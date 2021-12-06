const fs = require('fs');
const data = fs.readFileSync('./input.txt',{encoding:'utf8', flag:'r'});
let readings = data.split('\n');
let _ = require('lodash');

function getLines(input){
    let lines = []
    input.forEach(line => {
        currLine = {"start":{},"end":{}}
        let points = line.split(' -> ');
        let pointA = points[0].split(",");
        let pointB = points[1].split(",");
        currLine.start.x=parseInt(pointA[0]);
        currLine.start.y=parseInt(pointA[1]);
        currLine.end.x=parseInt(pointB[0]);
        currLine.end.y=parseInt(pointB[1]);
        lines.push(currLine);
    });

    return lines;
}

function createGrid(lines){
    // find grid size
    let largestX = 0;
    let largestY = 0;
    let allPoints = [];
    lines.forEach(line =>{
        // get sizes
        if(line.start.x>largestX){
            largestX = line.start.x;
        }
        if(line.end.x>largestX){
            largestX = line.end.x;
        }
        if(line.start.y>largestY){
            largestY=line.start.y;
        }
        if(line.end.y>largestY){
            largestY=line.start.y;
        }

        // add all points
        if(line.start.x==line.end.x){
            let yList = _.range(line.start.y,line.end.y);
            yList.push(line.end.y);
            yList = yList.sort();
            for(let y=0;y<yList.length;y++){
                let point = {"x":line.start.x,"y":yList[y]};
                allPoints.push(point);
            }
        }else if(line.start.y==line.end.y){
            let xList = _.range(line.start.x,line.end.x);
            xList.push(line.end.x);
            xList = xList.sort();
            for(let x=0;x<xList.length;x++){
                let point = {"x":xList[x],"y":line.start.y};
                allPoints.push(point);
            }
        }else{
            let startPoint = {};
            let endPoint = {};
            if(line.start.x<line.end.x){
                startPoint = line.start;
                endPoint = line.end;
            }else{
                startPoint = line.end;
                endPoint = line.start;
            }
            yCounter = 0;
            for(let x = startPoint.x;x<=endPoint.x;x++){
                if(startPoint.y<endPoint.y){
                    point = {"x":x,"y":startPoint.y+yCounter}
                    allPoints.push(point)
                }else{
                    point = {"x":x,"y":startPoint.y-yCounter}
                    allPoints.push(point)
                }
                yCounter++;
            }
        }
    });

    // create empty grid
    let grid = [];
    for(let x=0;x<largestX+1;x++){//might as well add a +1
        grid[x]=[]
        for(let y=0;y<largestY+1;y++){//another one
            grid[x][y]='.'
        }
    }

    // add lines
    allPoints.forEach(point=>{
        if(grid[point.x][point.y]=='.'){
            grid[point.x][point.y]=1;
        }else{
            grid[point.x][point.y]++
        }
    });

    return grid;
}

function dangerCounter(grid,dangerThreshold){
    numDangerSpots = grid.reduce((outerAcc,outer)=>{
        rowCount = outer.reduce((innerAcc,inner)=>{
            if(inner!='.'){
                if(inner>=dangerThreshold){
                    return innerAcc + 1;
                }
            }
            return innerAcc;
        },0);
        return outerAcc + rowCount;
    },0);
    return numDangerSpots;
}

let lineSegments = getLines(readings);
let grid = createGrid(lineSegments);
let dangerLevel = dangerCounter(grid,2);
console.log(dangerLevel);