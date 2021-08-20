import React from "react";
import Header from "./Header";
import Game from "../one-player/Game";
import MainPioneers from "../Pioneers/MainPioneers";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Game />
        <MainPioneers />
        <Footer />
      </main>
    </>
  );
};

export default Landing;
