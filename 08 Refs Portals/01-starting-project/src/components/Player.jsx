import { useState, useRef } from "react";
export default function Player() {
  const [myName, setMyName] = useState("Unknown");
  const [submitted, setSubmitted] = useState(false);
  const playerName = useRef("");
  function handleChange(event) {
    setSubmitted(false);
    console.log("Handle Change Is Called");
    setMyName(event.target.value);
  }
  function handleClick() {
    setMyName(playerName.current.value);
    console.log(playerName);
    console.log(playerName.current);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {myName ? myName : "Unknown"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
