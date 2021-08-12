import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import HomeButton from "../HomeButton";
import charactersData from "../../data/onePlayerData.json";

const MainGame1 = () => {
  const [deckDisposal, setDeckDisposal] = useState([]);
  const [cardSelection1, setCardSelection1] = useState({});
  const [cardSelection2, setCardSelection2] = useState({});
  const [resolvedCards, setResolvedCards] = useState([]);
  const [unflippedCards, setUnflippedCards] = useState([]);
  //const [allresolvedCards, setAllResolvedCards] = useState([]);

  console.log(resolvedCards);
  //console.log(allresolvedCards);

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

  console.log(deckDisposal);

  const checkMatch = () => {
    if (cardSelection1.name && cardSelection2.name) {
      const match = cardSelection1.name === cardSelection2.name;
      match ? resolveCards() : unflipCards();
    }
  };

  const resolveCards = () => {
    setResolvedCards([cardSelection1.index, cardSelection2.index]);
    //setAllResolvedCards([allresolvedCards.push(resolvedCards)]);
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
      <section className="game__section" id="game">
        <HomeButton />
        <Cards
          characters={deckDisposal}
          getCardInfo={getCardInfo}
          unflippedCards={unflippedCards}
          resolvedCards={resolvedCards}
        />
      </section>
    </>
  );
};

export default MainGame1;
