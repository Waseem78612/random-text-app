import { people } from "./scientists.js";
import { getImageUrl } from "./scientistsutils.js";

export default function ScientistsList() {
  const listItems = people.map((person) => (
    <li key={person.id} style={{ display: "flex", margin: "20px" }}>
      <img
        style={{ borderRadius: "50%" }}
        src={getImageUrl(person)}
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
      <h1>Scientists</h1>
      <ul style={{ listStyle: "none" }}>{listItems}</ul>
    </article>
  );
}
