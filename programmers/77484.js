// https://programmers.co.kr/learn/courses/30/lessons/77484
// Author: Aivyss

function solution(lottos, win_nums) {
    let cnt = 0;
    let zeroCnt = lottos.filter((curr) => curr === 0).length;

    win_nums.forEach((winNum) => (cnt += lottos.filter((lotNum) => lotNum === winNum).length));

    return [
        Math.abs(cnt + zeroCnt - 7) >= 6 ? 6 : Math.abs(cnt + zeroCnt - 7),
        Math.abs(cnt - 7) >= 6 ? 6 : Math.abs(cnt - 7),
    ];
}
