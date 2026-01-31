import { useState } from "react";
import GameBoard from "./GameBoard";
import GameControls from "./GameControls";
import MoveHistory from "./MoveHistory";
import GameResult from "./GameResult";
import GameStatus from "./GameStatus";
import { calculateWinner, checkDraw } from "./tictactoeutils";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  const isDraw = checkDraw(currentSquares);

  const handlePlay = (nextSquares) => {
    if (calculateWinner(nextSquares) || checkDraw(nextSquares)) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
      return;
    }
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => setCurrentMove(nextMove);
  const handleRestart = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return (
    <div className="game">
      <div
        className="game-container"
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div className="game-board-container">
          <GameBoard
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <GameControls onRestart={handleRestart} />
        </div>

        <div className="game-info" style={{ minWidth: "250px" }}>
          <GameResult winner={winner} isDraw={isDraw} />
          <MoveHistory
            history={history}
            currentMove={currentMove}
            onJumpTo={jumpTo}
          />
          <GameStatus
            currentMove={currentMove}
            totalMoves={history.length - 1}
            xIsNext={xIsNext}
            winner={winner}
            isDraw={isDraw}
          />
        </div>
      </div>
    </div>
  );
}
