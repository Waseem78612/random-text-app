export default function GameHeader({ status }) {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Tic-Tac-Toe</h1>
      <div
        className="status"
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {status}
      </div>
    </>
  );
}
