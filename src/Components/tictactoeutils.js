export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function checkDraw(squares) {
  const allFilled = squares.every(square => square !== null);
  const hasWinner = calculateWinner(squares) !== null;
  return allFilled && !hasWinner;
}

export function getGameStatus(squares, xIsNext) {
  const winner = calculateWinner(squares);
  const isDraw = checkDraw(squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Game Draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return { status, winner, isDraw };
}