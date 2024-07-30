import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  console.log("Player Is Rendering");
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
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
