// LOOK UP TABLE을 사용한다면 조건문을 추상화시킬 수 있습니다.
function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  const DIR = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  const LEN = board.length;
  const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

  let Y = 0;
  let X = 0;
  let score = 0;
  for (let i = 0; i < operation.length; i++) {
    const [dY, dX] = DIR[operation[i]];
    Y += dY;
    X += dX;
    if (isValid(Y, X) === false) return "OUT";
    score += board[Y][X];
  }
  return score;
}

function boardGame(board, operation) {
  let current = { row: 0, col: 0 };
  let score = 0;
  for (let i = 0; i < operation.length; i++) {
    if (operation[i] === "U") {
      current.row--;
    } else if (operation[i] === "D") {
      current.row++;
    } else if (operation[i] === "L") {
      current.col--;
    } else if (operation[i] === "R") {
      current.col++;
    }
    if (
      current.row < 0 ||
      current.row >= board.length ||
      current.col < 0 ||
      current.col >= board.length
    ) {
      return "OUT";
    }
    score += board[current.row][current.col];
  }
  return score;
}
