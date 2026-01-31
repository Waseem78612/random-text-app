import Square from "./Square";
import GameHeader from "./GameHeader";
import { calculateWinner } from "./tictactoeutils";
import { getGameStatus } from "./tictactoeutils";

export default function GameBoard({ xIsNext, squares, onPlay }) {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const renderRow = (row) => (
    <div className="board-row" style={{ display: "flex" }}>
      {[0, 1, 2].map((col) => {
        const index = row * 3 + col;
        return (
          <Square
            key={index}
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );

  const { status, winner, isDraw } = getGameStatus(squares, xIsNext);

  return (
    <div className="game-board">
      <GameHeader status={status} winner={winner} isDraw={isDraw} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {[0, 1, 2].map((row) => renderRow(row))}
      </div>
    </div>
  );
}
