export default function MoveHistory({ history, currentMove, onJumpTo }) {
  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move #${move}` : "Go to game start";
    const isCurrentMove = move === currentMove;
    const moveLocation =
      move > 0
        ? ` (${squares.findIndex((val, idx) => val !== history[move - 1][idx])})`
        : "";

    return (
      <li key={move}>
        <button
          onClick={() => onJumpTo(move)}
          style={
            isCurrentMove
              ? {
                  fontWeight: "bold",
                  backgroundColor: "#f0f0f0",
                }
              : {}
          }
        >
          {description}
          {moveLocation}
        </button>
      </li>
    );
  });

  return (
    <div className="move-history">
      <h3 style={{ margin: 0, marginBottom: "10px" }}>Move History</h3>
      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <ol style={{ paddingLeft: "20px", margin: 0 }}>{moves}</ol>
      </div>
    </div>
  );
}
