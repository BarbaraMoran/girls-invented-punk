import React from "react";
import { Link } from "react-router-dom";
import videoMix from "../../images/mix.mp4";
import videoMix2 from "../../images/background.mp4";
import poster from "../../images/poster.png";
import Header from "./Header";

const Landing = () => {
  return (
    <>
      <Header />
      <main className="landing__main">
        <div className="main__container--title">
          <h1 className="main__title">Girls invented Punk not England</h1>
        </div>
        <div className="main__container--subtitle-nav">
          <h2 className="main__subtitle">Memory card game</h2>
          <nav className="main__nav">
            <div className="main__nav--container">
              <Link className="button__player" to="/one-player">
                One player
              </Link>
            </div>
            <div className="main__nav--container">
              <Link className="button__player" to="/two-players">
                Two players
              </Link>
            </div>
          </nav>
        </div>
        <video className="main__background" autoPlay muted loop poster={poster}>
          <source src={videoMix} type="video/mp4" />
        </video>
        <video className="main__background-min" autoPlay muted loop>
          <source src={videoMix2} type="video/mp4" />
        </video>
      </main>
    </>
  );
};

export default Landing;
