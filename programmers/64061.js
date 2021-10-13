// https://programmers.co.kr/learn/courses/30/lessons/64061
// Author : Aivyss
function solution(board, moves) {
    let answer = 0;
    const stack = [];

    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            [board[j][i], board[i][j]] = [board[i][j], board[j][i]];
        }
    }

    moves.forEach((curr) => {
        let item = 0;

        while (item === 0) item = board[curr - 1].shift();

        if (stack.length > 0) {
            const flag = item === stack[stack.length - 1];

            if (flag) {
                stack.pop();
                answer += 2;
            } else item ? stack.push(item) : undefined;
        } else item ? stack.push(item) : undefined;
    });

    return answer;
}
