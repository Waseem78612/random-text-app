import * as React from "react";
import quotes from "./TeaQuotes";
import FancyText from "./TeaFancyText";

export default function InspirationGenerator({ children }) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button
        onClick={next}
        style={{
          backgroundColor: "darkblue",
          padding: "3px 10px",
          color: "gray",
          cursor: "pointer",
          border: "none",
        }}
      >
        Inspire me again
      </button>
      {children}
    </>
  );
}
