import React from "react";
import Header from "./Header";
import Game from "../game/Game";
import MainPioneers from "../pioneers/MainPioneers";
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
