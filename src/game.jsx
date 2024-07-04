import React from "react";

export default function GenerateTiles(props) {
  const [click, setClick] = React.useState(props.on);

  const clickTile = click ? props.emoji : props.word;

  function gameContent() {
    setClick((prevClick) => !prevClick);
  }

  return (
    <div className="box" key={props.id} onClick={gameContent}>
      <h1 className="tile-content">{clickTile}</h1>
    </div>
  );
}
