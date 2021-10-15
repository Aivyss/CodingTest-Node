// https://programmers.co.kr/learn/courses/30/lessons/70128
// Author: Aivyss

function solution(a, b) {
    return a.reduce((prev, curr, idx) => prev + curr * b[idx], 0);
}
