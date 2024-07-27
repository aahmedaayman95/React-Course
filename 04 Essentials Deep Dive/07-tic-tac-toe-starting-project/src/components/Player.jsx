import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  console.log("Player is rendering");
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // if (!isEditing) setIsEditing(true);
    // else setIsEditing(false);
    // isEditing ? setIsEditing(false) : setIsEditing(true);

    // setIsEditing(isEditing? false : true);

    // setIsEditing(!isEditing);
    // setIsEditing(!isEditing);

    setIsEditing((Hamada) => !Hamada);
    // setIsEditing((Hamada) => !Hamada);
    console.log("Hi");
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  let EditablePlayerName = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange}></input>
  ) : (
    <span className="player-name">{playerName}</span>
  );

  let btnCaption = isEditing ? "Save" : "Edit";

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {EditablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </span>
    </li>
  );
}
