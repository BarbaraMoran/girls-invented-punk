import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import HomeButton from "../HomeButton";
import Counter from "./Counter";
import Modal from "./Modal";
import charactersData from "../../data/onePlayerData.json";

const Game = () => {
  //array de artistas con orden random
  const [deckDisposal, setDeckDisposal] = useState([]);
  //primera carta escogida
  const [cardSelection1, setCardSelection1] = useState({});
  //segunda carta escogida
  const [cardSelection2, setCardSelection2] = useState({});
  //últimas cartas resueltas
  const [resolvedCards, setResolvedCards] = useState([]);
  //cartas levantadas que se vuelven a cubrir por no ser match
  const [unflippedCards, setUnflippedCards] = useState([]);
  //número de parejas conseguidas
  const [matchsNumber, setMatchsNumber] = useState(0);
  //reset de las cartas
  const [initialPosition, setInitialPosition] = useState(false);
  //modal
  const [active, setActive] = useState(true);

  useEffect(() => {
    //barajar
    charactersData.sort(function () {
      return 0.5 - Math.random();
    });
    setDeckDisposal(charactersData);
  }, []);

  useEffect(() => {
    //verificar si ha habido match
    checkMatch();
  }, [cardSelection2]); // eslint-disable-line react-hooks/exhaustive-deps

  //recoger valores de cartas levantadas y verificar
  const getCardInfo = (name, index) => {
    if (cardSelection1.name === name && cardSelection1.index === index) {
      return 0;
      //estoy pinchando en la misma carta que ya he levantado
    }

    if (!cardSelection1.name) {
      setCardSelection1({ name, index });
    } else if (!cardSelection2.name) {
      setCardSelection2({ name, index });
    }
    return 1;
    //guardar valores. Levantar carta seleccionada.
  };

  console.log(deckDisposal);

  //comparar valores y ver si hay match
  const checkMatch = () => {
    if (cardSelection1.name && cardSelection2.name) {
      const match = cardSelection1.name === cardSelection2.name;
      //si hay, bloquear cartas. Si no, volver a girarlas.
      match ? resolveCards() : unflipCards();
    }
  };

  const resolveCards = () => {
    //actualizar con cartas del último match, borrar selección y añadir puntos
    setResolvedCards([cardSelection1.index, cardSelection2.index]);
    resetCardSelection();
    addMatch();
  };

  //en caso de no match, guardar cartas no acertadas en el estado unflipped y borrar selección
  const unflipCards = () => {
    setUnflippedCards([cardSelection1.index, cardSelection2.index]);
    resetCardSelection();
  };

  const resetCardSelection = () => {
    setCardSelection1({});
    setCardSelection2({});
  };

  const addMatch = () => {
    setMatchsNumber(matchsNumber + 1);
    checkEndOfTheGame();
  };

  //verificar si ha terminado el juego
  const totalpairs = charactersData.length / 2;
  const checkEndOfTheGame = () => {
    if (matchsNumber === totalpairs - 1) {
      setActive(true);
    }
  };

  //jugar de nuevo
  const playAgain = () => {
    setInitialPosition(!initialPosition);

    setCardSelection1({});
    setCardSelection2({});
    setResolvedCards([]);
    setUnflippedCards([]);
    setMatchsNumber(0);

    mixCards();
    toggle();
  };

  //barajar
  const mixCards = () => {
    charactersData.sort(function () {
      return 0.5 - Math.random();
    });
    setDeckDisposal(charactersData);
  };

  //cerrar modal
  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <section className="game__section" id="game">
        <HomeButton />
        <div className="functions-container">
          <Counter matchsNumber={matchsNumber} totalpairs={totalpairs} />
          <Modal active={active} toggle={toggle} playAgain={playAgain} />
        </div>
        <div className="cardlist__container">
          <Cards
            characters={deckDisposal}
            getCardInfo={getCardInfo}
            unflippedCards={unflippedCards}
            resolvedCards={resolvedCards}
            initialPosition={initialPosition}
          />
        </div>
      </section>
    </>
  );
};

export default Game;
