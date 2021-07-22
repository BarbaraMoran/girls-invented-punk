import React from "react";
import "../stylesheets/components/Header.scss";
import music from "../audio/girls.mp3";

const Header = () => {
  return (
    <header className="header">
      <audio
        className="audio"
        id="audio"
        preload="auto"
        controls
        src={music}
      ></audio>
    </header>
  );
};

export default Header;
