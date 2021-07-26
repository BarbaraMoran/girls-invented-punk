import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import charactersData from "../../data/onePlayerData.json";

const MainGame1 = () => {
  const [deckDisposal, setDeckDisposal] = useState([charactersData]);
  const [cardSelection1, setCardSelection1] = useState({});
  const [cardSelection2, setCardSelection2] = useState({});
  const [cardsSelection, setCardsSelection] = useState([]);
  const [resolvedCards, setResolvedCards] = useState([]);
  const [unflippedCards, setUnflippedCards] = useState([]);

  useEffect(() => {
    const getRandomOrder = () => {
      charactersData.sort(function () {
        return 0.5 - Math.random();
      });
      setDeckDisposal(charactersData);
    };
    getRandomOrder();
  }, []);

  useEffect(() => {
    checkMatch();
  }, [setCardSelection2]);

  const getCardInfo = (cardInfo) => {
    if (
      cardSelection1.name === cardInfo.name &&
      cardSelection1.index === cardInfo.index
    ) {
      return 0;
      //estoy dando la vuelta a la misma carta
    }

    if (!cardSelection1.name) {
      setCardSelection1(cardInfo);
      cardsSelection.push(cardInfo);
      setCardsSelection(cardsSelection);
    } else if (!cardSelection2.name) {
      setCardSelection2(cardInfo);
      cardsSelection.push(cardInfo);
      setCardsSelection(cardsSelection);
    }
    return 1;
  };

  console.log(cardSelection1);
  console.log(cardSelection2);
  console.log(cardsSelection);
  console.log(deckDisposal);

  const checkMatch = () => {
    if (cardsSelection.length === 2) {
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
    setCardsSelection([]);
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
