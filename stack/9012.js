function solution(str) {
    let list = str.split('');
    list = list.reverse();
    const stack = [];

    const loofCount = list.length;
    for (let i = 0; i < loofCount; i += 1) {
        const item = list.pop();

        if (item === '(') stack.push(item);
        else {
            if (stack.length === 0) return 'NO';
            else stack.pop();
        }
    }

    if (stack.length > 0) return 'NO';
    else return 'YES';
}

function stringProcess(input) {
    return input.slice(1).reduce((prev, curr) => prev + `${solution(curr)}\n`, '');
}

const inputArry = [];
require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (line) => inputArry.push(line))
    .on('close', () => {
        console.log(stringProcess(inputArry));
        process.exit();
    });
