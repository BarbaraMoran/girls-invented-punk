import React from "react";
import { Link } from "react-router-dom";
import music from "../../audio/girls.mp3";

const Header = () => {
  return (
    <header className="header">
      {/* <audio
        className="audio"
        id="audio"
        preload="auto"
        controls
        src={music}
      ></audio> */}
      <nav className="nav">
        <div className="site__links">
          <Link className="header__link" to="/">
            Home
          </Link>
        </div>
        <div className="social__media">
          <small className="small">made by B.M(2021)</small>
          <a
            className="sm__link github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BarbaraMoran"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            className="sm__link"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/BarbsMoran"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            className="sm__link"
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/barbaramorandev"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            className="sm__link"
            target="_blank"
            rel="noreferrer"
            title="barbaramoranrr@gmail.com"
            href="mailto:barbaramoranrr@gmail.com"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
