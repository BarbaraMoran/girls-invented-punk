import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/components/Landing.scss";
import videoMix from "../../images/mix.mp4";

const Landing = () => {
  return (
    <main className="landing__main">
      <div className="main__container--title">
        <h1 className="main__title">Girls invented Punk not England</h1>
      </div>
      <h2 className="main__subtitle">The Punk pioneers Game</h2>
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
      <video className="main__background" autoPlay muted loop>
        <source src={videoMix} type="video/mp4" />
      </video>
    </main>
  );
};

export default Landing;
