import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import charactersData from "../../data/onePlayerData.json";

const MainGame1 = () => {
  const [deckDisposal, setDeckDisposal] = useState([charactersData]);
  const [characterIsHidden, setCharacterIsHidden] = useState(true);

  useEffect(() => {
    const getRandomOrder = () => {
      charactersData.sort(function () {
        return 0.5 - Math.random();
      });
      setDeckDisposal(charactersData);
    };
    getRandomOrder();
  }, []);

  const handleCard = () => {};

  return (
    <>
      <nav>
        <Link className="home__link" to="/">
          Home
        </Link>
      </nav>
      <Cards
        characters={deckDisposal}
        handleCard={handleCard}
        characterIsHidden={characterIsHidden}
      />
    </>
  );
};

export default MainGame1;
