export default function GameResult({ winner, isDraw }) {
  if (!winner && !isDraw) return null;

  const gameResult = winner
    ? `Player ${winner} wins!`
    : "Game ended in a draw!";
  const backgroundColor = winner ? "#d4edda" : "#fff3cd";
  const borderColor = winner ? "#28a745" : "#ffc107";
  const textColor = winner ? "#155724" : "#856404";

  return (
    <div
      className="game-result"
      style={{
        marginBottom: "20px",
        padding: "15px",
        backgroundColor,
        border: `2px solid ${borderColor}`,
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: 0, color: textColor }}>{gameResult}</h3>
    </div>
  );
}
