import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/components/Landing.scss";
import videoMix from "../../images/mix.mp4";
import poster from "../../images/poster.jpg";

const Landing = () => {
  return (
    <header className="landing__header">
      <span className="header__title">Girls invented Punk, </span>
      <span className="header__title">not England</span>
      <h2 className="header__subtitle">Punk cards Memory Game</h2>
      <video className="header__background" autoPlay muted loop poster={poster}>
        <source src={videoMix} type="video/mp4" />
      </video>
      <nav className="header__nav--options">
        <Link className="button__player" to="/one-player">
          One player
        </Link>
        <Link className="button__player" to="/two-players">
          Two players
        </Link>
      </nav>
    </header>
  );
};

export default Landing;
