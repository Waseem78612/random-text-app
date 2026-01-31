import FancyText from "./TeaFancyText";
import InspirationGenerator from "./TeaInspirationGenerator";
import Copyright from "./TeaCopyright";
import "./App.css";

export default function TeaResult() {
  return (
    <section
      style={{
        margin: "auto",
        width: "550px",
        backgroundColor: "purple",
        padding: "20px",
        color: "gray",
      }}
    >
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </section>
  );
}
