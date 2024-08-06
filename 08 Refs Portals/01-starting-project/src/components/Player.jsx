import { useState } from "react";

export default function Player() {
  const [myName, setMyName] = useState("Player1");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    console.log("Handle Change Is Called");
    setMyName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? myName : "Player1"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={myName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
