const fs = require('node:fs');

const input = fs.readFileSync('input.txt', 'utf8');

const rows = input.split('\n');
const arr = rows.map(row=>{
    return row.split('');
})
let count = 0;
const checkX=(arr, x, y)=>{
    if(x===2 && y===1){

    }
    try{
        const hasTopLeftM = arr[y-1][x-1]==='M'
        const hasBottomRightS = arr[y+1][x+1]==='S'
        const hasBottomRightM = arr[y+1][x+1]==='M'
        const hasTopLeftS = arr[y-1][x-1]==='S'

        const topLeftMAS = hasTopLeftM && hasBottomRightS
        const bottomRightMAS = hasBottomRightM && hasTopLeftS

        const firstDiagonalMAS = topLeftMAS || bottomRightMAS

        const hasBottomLeftM = arr[y+1][x-1]==='M'
        const hasTopRightS = arr[y-1][x+1]==='S'
        const hasBottomLeftS = arr[y+1][x-1]==='S'
        const hasTopRightM = arr[y-1][x+1]==='M'

        const topRightMAS = hasTopRightM && hasBottomLeftS
        const bottomLeftMAS = hasBottomLeftM && hasTopRightS

        const secondDiagonalMAS = topRightMAS || bottomLeftMAS




        if(
            firstDiagonalMAS
            && secondDiagonalMAS
        ){
            return 1
        }
        return 0
    }
    catch(e){
        return 0
    }

}

arr.forEach((row, y)=>{
    row.forEach((col, x)=>{
        if(col === 'A'){
            // console.log(y, x)
            count+=checkX(arr, x, y);
        }
    })
})

console.log(count)