export default function GameControls({ onRestart }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <button
        onClick={onRestart}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Restart Game
      </button>
      <button
        onClick={onRestart}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Reset
      </button>
    </div>
  );
}
