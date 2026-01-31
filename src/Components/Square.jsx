export default function Square({ value, onSquareClick }) {
  return (
    <button
      style={{
        width: "80px",
        height: "80px",
        padding: "0",
        fontSize: "36px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #333",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
