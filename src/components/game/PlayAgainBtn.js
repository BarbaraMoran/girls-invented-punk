import React from "react";

const PlayAgainBtn = (props) => {
  return (
    <>
      <h5 className="play-again" onClick={props.playAgain}>
        👉 Play Again
      </h5>
    </>
  );
};

export default PlayAgainBtn;
