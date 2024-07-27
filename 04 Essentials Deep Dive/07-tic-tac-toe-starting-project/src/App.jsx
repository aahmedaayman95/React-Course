import Header from "./components/Header";
import Player from "./components/Player";
import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  console.log("App is rendering");
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectedPlayer() {
    console.log("Handle Selected Player is called");
    setActivePlayer((currentPlayer) => {
      return currentPlayer === "X" ? "O" : "X";
    });
  }
  return (
    <main>
      <div id="game-container">
        <Players currentPlayer={activePlayer}></Players>
        <GameBoard
          activePlayerSymbol={activePlayer}
          changePlayer={handleSelectedPlayer}
        />
      </div>
    </main>
  );
}

export default App;
