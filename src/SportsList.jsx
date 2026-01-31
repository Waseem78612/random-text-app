import { cricketers } from "./sportsdata.js";
import "./App.css";
export default function SportsList() {
  const listItems = cricketers.map((person) => (
    <li key={person.id} style={{ display: "flex", margin: "20px" }}>
      <img
        style={{ borderRadius: "50%" }}
        src={person.imageId}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article
      style={{
        backgroundColor: "purple",
        color: "white",
        margin: "auto",
        width: "400px",
        padding: "10px",
      }}
    >
      <h1>Crickters</h1>
      <ul style={{ listStyle: "none" }}>{listItems}</ul>
    </article>
  );
}
