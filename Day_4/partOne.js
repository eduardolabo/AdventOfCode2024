const fs = require('node:fs');

const input = fs.readFileSync('input.txt', 'utf8');

const rows = input.split('\n');
const arr = rows.map(row=>{
    return row.split('');
})
let count = 0;
const checkRight=(arr, x, y)=>{
    try{
        if( arr[y][x+1]==='M'
            && arr[y][x+2]==='A'
            && arr[y][x+3]==='S'){
            return 1
        }
        return 0
    }
    catch(e){
        return 0
    }

}

const checkLeft=(arr, x, y)=>{
    try{
        if( arr[y][x-1]==='M'
            && arr[y][x-2]==='A'
            && arr[y][x-3]==='S'){
            return 1
        }
        return 0
    }
    catch(e){
        return 0
    }

}

const checkUp=(arr, x, y)=>{
    try{
        if( arr[y-1][x]==='M'
            && arr[y-2][x]==='A'
            && arr[y-3][x]==='S'){
            return 1
        }
        return 0
    }
    catch(e){
        return 0
    }

}

const checkDown=(arr, x, y)=>{
    try{
        if( arr[y+1][x]==='M'
            && arr[y+2][x]==='A'
            && arr[y+3][x]==='S'){
            return 1
        }
        return 0
    }
    catch(e){
        return 0
    }

}

const checkRightUp=(arr, x, y)=>{
    try{
        if( arr[y-1][x+1]==='M'
            && arr[y-2][x+2]==='A'
            && arr[y-3][x+3]==='S'){
            return 1
        }
        return 0
    }
    catch(e){
        return 0
    }

}


const checkRightDown=(arr, x, y)=>{
    try{
        if( arr[y+1][x+1]==='M'
            && arr[y+2][x+2]==='A'
            && arr[y+3][x+3]==='S'){
            return 1
        }
        return 0
    }
    catch(e){
        return 0
    }

}

const checkLeftUp=(arr, x, y)=>{
    try{

    }
    catch(e){
        return 0
    }
    if(arr[y-3]
        && arr[y][x]==='X'
        && arr[y-1][x-1]==='M'
        && arr[y-2][x-2]==='A'
        && arr[y-3][x-3]==='S'){
        return 1
    }
    return 0
}

const checkLeftDown=(arr, x, y)=>{
    try{
        if( arr[y][x]==='X'
            && arr[y+1][x-1]==='M'
            && arr[y+2][x-2]==='A'
            && arr[y+3][x-3]==='S'){
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
        if(col === 'X'){
            count+=checkRight(arr, x, y);
            count+=checkLeft(arr, x, y);
            count+=checkUp(arr, x, y);
            count+=checkDown(arr, x, y);
            count+=checkRightUp(arr, x, y);
            count+=checkRightDown(arr, x, y);
            count+=checkLeftDown(arr, x, y);
            count+=checkLeftUp(arr, x, y);
        }
    })
})

console.log(count)