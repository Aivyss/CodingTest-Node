// https://programmers.co.kr/learn/courses/30/lessons/77484
// Author: Aivyss

function solution(lottos, win_nums) {
    let cnt = 0;
    let zeroCnt = lottos.filter((curr) => !curr).length;

    win_nums.forEach((winNum) => (cnt += lottos.some((lotNum) => lotNum === winNum)));

    return [
        Math.abs(cnt + zeroCnt - 7) >= 6 ? 6 : Math.abs(cnt + zeroCnt - 7),
        Math.abs(cnt - 7) >= 6 ? 6 : Math.abs(cnt - 7),
    ];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
