import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import charactersData from "../../data/onePlayerData.json";

const MainGame1 = () => {
  const [deckDisposal, setDeckDisposal] = useState([charactersData]);
  //const [characterIsHidden, setCharacterIsHidden] = useState(true);
  const [cardSelection1, setcardSelection1] = useState({});
  const [cardSelection2, setcardSelection2] = useState({});
  const [cardsSelection, setcardsSelections] = useState([]);
  const [className, setClassName] = useState("backCard");

  useEffect(() => {
    const getRandomOrder = () => {
      charactersData.sort(function () {
        return 0.5 - Math.random();
      });
      setDeckDisposal(charactersData);
    };
    getRandomOrder();
  }, []);

  const handleCard = (cardInfo) => {
    //setCharacterIsHidden(false);
    if (cardsSelection.length === 0) {
      setcardSelection1(cardInfo);
      cardsSelection.push(cardInfo);
      setcardsSelections(cardsSelection);
    } else if (cardsSelection.length === 1) {
      setcardSelection2(cardInfo);
      cardsSelection.push(cardInfo);
      setcardsSelections(cardsSelection);
    }

    showCard();
  };

  const showCard = () => {
    for (const eachCharacter of deckDisposal) {
      const checkPickedCards = cardsSelection.find(
        (selected) => selected.id === eachCharacter.id
      );

      if (checkPickedCards === undefined) {
        setClassName("backCard");
      } else {
        setClassName("frontCard");
      }
    }
  };
  console.log(cardSelection1);
  console.log(cardSelection2);
  console.log(cardsSelection);

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
        cardSelection1={cardSelection1}
        cardSelection2={cardSelection2}
        cardsSelection={cardsSelection}
        className={className}
        //characterIsHidden={characterIsHidden}
      />
    </>
  );
};

export default MainGame1;
