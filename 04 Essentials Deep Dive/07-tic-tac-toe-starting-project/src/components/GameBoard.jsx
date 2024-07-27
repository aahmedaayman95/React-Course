import { useState } from "react";

const INITIALBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const test01 = (
  <ol>
    <li>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </li>
    <li>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </li>
    <li>
      <ol>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </li>
  </ol>
);

function GameBoard({ activePlayerSymbol, changePlayer }) {
  console.log("Game Board Is rendering");
  const [gameBoard, setGameBoard] = useState(INITIALBOARD);
  console.log(gameBoard);
  function handleClick(rowIndex, colIndex) {
    console.log(rowIndex, colIndex);
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      console.log(updatedGameBoard);
      return updatedGameBoard;
    });
    changePlayer();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
