// https://programmers.co.kr/learn/courses/30/lessons/12977
// author: Aivyss

const generateCombi = (arr, m) => {
    const result = [];

    if (m === 1) return arr.map((curr) => [curr]);

    arr.forEach((curr, idx, self) => {
        const newArr = arr.slice(idx + 1);
        const combi = generateCombi(newArr, m - 1);
        const attached = combi.map((curr2) => [curr, ...curr2]);
        result.push(...attached);
    });

    return result;
};

const isOddCase = (arr) => arr.reduce((prev, curr) => prev + curr, 0) % 2 !== 0;

const getPrimes = (maxNum) => {
    let initialArr = [];
    let cnt = 0;
    const result = [];
    for (let i = 2; i <= maxNum; i += 1) initialArr.push(i);
    let arrLength = initialArr.length;

    while (cnt < arrLength) {
        result.push(initialArr[cnt]);
        removeCommonMultiple(initialArr[cnt], initialArr);
        cnt += 1;
        arrLength = initialArr.length;
    }

    function removeCommonMultiple(num, arr) {
        initialArr = arr.filter((curr) => curr % num !== 0 || curr === num);
    }

    return result;
};
const arrSum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
function solution(nums) {
    let answer = 0;
    let primes = getPrimes(1000);
    const sortedNum = nums.sort((a, b) => a - b);
    const cases = generateCombi(sortedNum, 3);
    const oddCases = cases.filter((curr) => isOddCase(curr));

    oddCases.forEach((curr) => {
        const sum = arrSum(curr);

        let flag = false;
        for (let i = 0; i < primes.length; i += 1) {
            flag = primes[i] === sum;
            if (primes[i] ** 0.5 >= sum || flag) break;
        }
        answer += flag;
    });

    return answer;
}
