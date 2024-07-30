import Player from "./Player";

export default function Players({ currentPlayer }) {
  console.log("Players Are Rendering");
  return (
    <ol id="players" className="highlight-player">
      <Player
        initialName="Player 1"
        symbol="X"
        isActive={currentPlayer === "X"}
      ></Player>
      <Player
        initialName="Player 2"
        symbol="O"
        isActive={currentPlayer === "O"}
      ></Player>
    </ol>
  );
}
