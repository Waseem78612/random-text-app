export default function GameStatus({
  currentMove,
  totalMoves,
  xIsNext,
  winner,
  isDraw,
}) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#0d0d0d",

        border: "1px solid #dee2e6",
        borderRadius: "5px",
      }}
    >
      <h4 style={{ marginTop: 0 }}>Game Stats</h4>
      <div>Current Move: {currentMove}</div>
      <div>Total Moves: {totalMoves}</div>
      <div>Next Player: {xIsNext ? "X" : "O"}</div>
      <div>Game Status: {winner || isDraw ? "Finished" : "In Progress"}</div>
    </div>
  );
}
