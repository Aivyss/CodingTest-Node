// https://www.acmicpc.net/problem/4949
// author: Aivyss
function bracketSekai(str) {
    let arr = str.match(/[\(\)\[\]]/g);
    arr = arr ? arr.reverse() : arr;
    const stack = [];
    const loofCnt = arr ? arr.length : 0;

    if (loofCnt === 0) return 'yes';

    for (let i = 0; i < loofCnt; i += 1) {
        const item = arr.pop();
        if (item === '(' || item === '[') stack.push(item);
        else {
            if (stack.length === 0) return 'no';
            else {
                const stackItem = stack.pop();
                const flag = (stackItem === '(' && item === ')') || (stackItem === '[' && item === ']');
                if (!flag) return 'no';
            }
        }
    }

    if (stack.length > 0) return 'no';
    else return 'yes';
}

function answer(inputArr) {
    return inputArr.reduce((prev, curr) => {
        return prev + `${bracketSekai(curr)}\n`;
    }, '');
}

let inputArr = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => {
        if (line !== '.') inputArr.push(line);
    })
    .on('close', () => {
        console.log(answer(inputArr.splice(0, inputArr.length)));
        process.exit();
    });
