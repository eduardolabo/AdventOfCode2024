const fs = require('node:fs');

const input = fs.readFileSync('input.txt', 'utf8');


const rows = input.split('\n\n');
const rules = rows[0].split('\n').map(r=>r.split('|'))
const manuals = rows[1].split('\n').map(r=>r.split(','))
let sum = 0

const correctManual=(manual)=>{
    let _manual = manual;
    for(const rule of rules){
        let indexOfA = -1
        for(let i=0;i<_manual.length;i++){
            if(_manual[i]===rule[0]){
                indexOfA=i
                break
            }
        }
        let indexOfB = -1
        for(let i=0;i<_manual.length;i++){
            if(_manual[i]===rule[1]){
                indexOfB=i
            }
        }
        if(indexOfA === -1 || indexOfB === -1){
            continue
        }
        if(indexOfA>indexOfB){
            _manual = _manual.filter((page, index)=>{
                return index !==indexOfB
            })
            _manual = [..._manual.slice(0, indexOfA), rule[1], ..._manual.slice(indexOfA)]
            _manual = correctManual(_manual)
        }
    }
    return _manual
}

for(const manual of manuals){
    for(const rule of rules){
        const indexOfA = manual.indexOf(rule[0])
        const indexOfB = manual.indexOf(rule[1])
        if(indexOfA === -1 || indexOfB === -1){
            continue
        }
        if(indexOfA>indexOfB){
            const correctedManual = correctManual(manual)
            console.log(correctManual(manual))
            sum += Number(correctedManual[Math.floor(correctedManual.length/2)])
            break
        }
    }
}
console.log(sum)