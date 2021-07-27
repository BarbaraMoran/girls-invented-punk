import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import charactersData from "../../data/onePlayerData.json";

const MainGame1 = () => {
  const [deckDisposal, setDeckDisposal] = useState([]);
  const [cardSelection1, setCardSelection1] = useState({});
  const [cardSelection2, setCardSelection2] = useState({});
  const [resolvedCards, setResolvedCards] = useState([]);
  const [unflippedCards, setUnflippedCards] = useState([]);

  useEffect(() => {
    charactersData.sort(function () {
      return 0.5 - Math.random();
    });
    setDeckDisposal(charactersData);
  }, []);

  useEffect(() => {
    checkMatch();
  }, [cardSelection2]); // eslint-disable-line react-hooks/exhaustive-deps

  const getCardInfo = (name, index) => {
    if (cardSelection1.name === name && cardSelection1.index === index) {
      return 0;
      //estoy dando la vuelta a la misma carta
    }

    if (!cardSelection1.name) {
      setCardSelection1({ name, index });
    } else if (!cardSelection2.name) {
      setCardSelection2({ name, index });
    }
    return 1;
  };

  console.log(cardSelection1);
  console.log(cardSelection2);
  console.log(unflippedCards);
  console.log(resolvedCards);
  console.log(deckDisposal);

  const checkMatch = () => {
    if (cardSelection1.name && cardSelection2.name) {
      const match = cardSelection1.name === cardSelection2.name;
      match ? resolveCards() : unflipCards();
    }
  };

  const resolveCards = () => {
    setResolvedCards([cardSelection1.index, cardSelection2.index]);
    resetCardSelection();
  };

  const unflipCards = () => {
    setUnflippedCards([cardSelection1.index, cardSelection2.index]);
    resetCardSelection();
  };

  const resetCardSelection = () => {
    setCardSelection1({});
    setCardSelection2({});
  };

  return (
    <>
      <nav>
        <Link className="home__link" to="/">
          Home
        </Link>
      </nav>
      <main className="main">
        <Cards
          characters={deckDisposal}
          getCardInfo={getCardInfo}
          unflippedCards={unflippedCards}
          resolvedCards={resolvedCards}
        />
      </main>
    </>
  );
};

export default MainGame1;
