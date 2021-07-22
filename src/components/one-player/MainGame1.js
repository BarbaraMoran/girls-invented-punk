import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import charactersData from "../../data/onePlayerData.json";

const MainGame1 = () => {
  return (
    <>
      <nav>
        <Link className="home__link" to="/">
          Home
        </Link>
      </nav>
      <Cards characters={charactersData} />
    </>
  );
};

export default MainGame1;
