import React from "react";
import videoMix from "../../images/mix.mp4";
import videoMix2 from "../../images/background.mp4";
import poster from "../../images/poster.png";
import MainPioneers from "../Pioneers/MainPioneers";
import MainGame1 from "../one-player/MainGame1";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <header className="header" id="home">
        <div className="header__container">
          <h1 className="title">Girls invented Punk not England</h1>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="link" href="#game">
                  Play
                  <i class="fas fa-chevron-down icon"></i>
                </a>
              </li>
              <li className="nav__item">
                <a className="link" href="#learn">
                  Learn
                  <i className="fas fa-chevron-down icon"></i>
                </a>
              </li>
              <li className="nav__item">
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://open.spotify.com/playlist/2mBqI4lBQoH51XEcLBwgxs?si=O8jnJikWSyqXBc_Eay-cMQ&dl_branch=1&nd=1"
                >
                  Playlist
                  <i class="fab fa-spotify icon"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <video
          className="header__background"
          autoPlay
          muted
          loop
          poster={poster}
        >
          <source src={videoMix} type="video/mp4" />
        </video>
        <video className="header__background-min" autoPlay muted loop>
          <source src={videoMix2} type="video/mp4" />
        </video>
      </header>
      <main>
        <MainGame1 />
        <MainPioneers />
        <Footer />
      </main>
    </>
  );
};

export default Landing;
