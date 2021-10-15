// https://programmers.co.kr/learn/courses/30/lessons/76501
// Author: Aivyss

function solution(absolutes, signs) {
    let tot = 0;
    const negativ = absolutes
        .filter((curr, idx) => {
            tot += curr;
            return !signs[idx];
        })
        .reduce((prev, curr) => prev + curr, 0);

    return tot - negativ * 2;
}
