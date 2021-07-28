import React from "react";
import { Link } from "react-router-dom";
import Game2Header from "./Game2Header";

const MainGame2 = () => {
  return (
    <>
      <Game2Header />
      <main className="main__game2">
        <img
          className="progress-gif"
          src="https://media.tenor.com/images/46cbf0ff1909a04cab55f3d9ba5e901e/tenor.gif"
          alt="Work in progress"
        />
      </main>
    </>
  );
};

export default MainGame2;
