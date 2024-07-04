import React from "react";
import GenerateTiles from "./game";
import Cards from "./cards";

export default function App() {
  const [displayGames, setDisplayGames] = React.useState(Cards);

  const gameDisplay = displayGames.map((displayGame) => (
    <GenerateTiles
      className="box"
      key={displayGame.id}
      on={displayGame.on}
      word={displayGame.word}
      emoji={displayGame.emoji}
    />
  ));

  return (
    <div>
      <h1>Animals Tile Flip Game</h1>
      <main>{gameDisplay}</main>
    </div>
  );
}
