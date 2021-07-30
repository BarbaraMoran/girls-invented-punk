import React from "react";
//import { Link } from "react-router-dom";
import videoMix from "../../images/mix.mp4";
import videoMix2 from "../../images/background.mp4";
import poster from "../../images/poster.png";
//import Header from "./Header";
import MainPioneers from "../Pioneers/MainPioneers";
import MainGame1 from "../one-player/MainGame1";

const Landing = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="landing__main">
        <div className="main__container--title">
          <h1 className="main__title">Girls invented Punk not England</h1>
        </div>
        <div className="main__container--subtitle-nav">
          {/* <h2 className="main__subtitle">Memory card game</h2> */}
          <nav className="main__nav">
            <div className="main__link--container">
              <a className="link" href="#game">
                Play
                <i class="fas fa-chevron-down"></i>
              </a>
              {/* <Link className="link" to="/one-player">
                Play
              </Link> */}
            </div>
            <div className="main__link--container">
              <a className="link" href="#learn">
                Learn
                <i class="fas fa-chevron-down"></i>
              </a>
            </div>
            <div className="main__link--container">
              <a className="link" target="_blank" rel="noreferrer" href="#">
                Playlist
                <i class="fab fa-spotify"></i>
              </a>
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
      <MainGame1 />
      <MainPioneers />
    </>
  );
};

export default Landing;
