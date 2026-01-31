import "./App.css";
import SportsList from "./SportsList";
import ScientistsList from "./ScientistsList";
import TeaResult from "./TeaResult";
import TicTacToe from "./Components/TicTacToeResult";
import { useState } from "react";

const Sports = () => <SportsList />;
const Scientists = () => <ScientistsList />;
const Tea = () => <TeaResult />;
const TicTacToeComponent = () => <TicTacToe />;

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Sports");

  const components = {
    Sports: <Sports />,
    Scientists: <Scientists />,
    Tea: <Tea />,
    TicTacToe: <TicTacToeComponent />,
  };

  return (
    <div>
      <h1 style={{ color: "purple" }}>Select Random Text</h1>
      <select
        style={{
          padding: "5px 20px",
          cursor: "pointer",
          backgroundColor: "lightgray",
          color: "purple",
        }}
        value={selectedComponent}
        onChange={(e) => setSelectedComponent(e.target.value)}
      >
        <option value="Sports">Sports</option>
        <option value="Scientists">Scientists</option>
        <option value="Tea">Tea</option>
        <option value="TicTacToe">TicTacToe</option>
      </select>

      <div style={{ marginTop: "20px" }}>{components[selectedComponent]}</div>
    </div>
  );
};
export default App;
