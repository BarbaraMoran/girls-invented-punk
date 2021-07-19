import React from "react";
import { Link } from "react-router-dom";
import videoMix from "../../images/videoplayback.mp4";
import videoSiouxsey from "../../images/siouxsey.mp4";
import videoSlits from "../../images/slits.mp4";
import videoXray from "../../images/xray.mp4";
import poster from "../../images/poster.jpg";

const Landing = () => {
  return (
    <>
      <main>
        <div>
          <video autoPlay muted loop poster={poster}>
            <source src={videoMix} type="video/mp4" />
          </video>
          <video autoPlay muted loop poster={poster}>
            <source src={videoSiouxsey} type="video/mp4" />
          </video>
          <video autoPlay muted loop poster={poster}>
            <source src={videoSlits} type="video/mp4" />
          </video>
          <video autoPlay muted loop poster={poster}>
            <source src={videoXray} type="video/mp4" />
          </video>
        </div>
      </main>
      <nav>
        <Link className="button__one-player" to="/one-player">
          One player
        </Link>
        <Link className="button__one-player" to="/two-players">
          Two players
        </Link>
      </nav>
    </>
  );
};

export default Landing;
