const fs = require('node:fs');

const input = fs.readFileSync('input.txt', 'utf8');

const rows = input.split('\n\n');
const rules = rows[0].split('\n').map(r=>r.split('|'))
const manual = rows[1].split('\n').map(r=>r.split(','))
let sum = 0

for(const page of manual){
    let good = true
    for(const rule of rules){
        const indexOfA = page.indexOf(rule[0])
        const indexOfB = page.indexOf(rule[1])
        if(indexOfA === -1 || indexOfB === -1){
            continue
        }
        if(indexOfA>indexOfB){
            good = false
            break
        }
    }
    if(good){
        console.log(page[Math.floor(page.length/2)])
        sum += Number(page[Math.floor(page.length/2)])
    }
}
console.log(sum)