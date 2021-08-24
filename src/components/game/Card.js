import React from "react";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import backDeck from "../../images/card5.jpg";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  const {
    index,
    name,
    picture,
    getCardInfo,
    unflippedCards,
    resolvedCards,
    initialPosition,
  } = props;

  //volver a cubrir las cartas erradas tras x segundos
  useEffect(() => {
    if (unflippedCards.includes(index)) {
      setTimeout(() => setIsFlipped(false), 1200);
    }
  }, [unflippedCards]); // eslint-disable-line react-hooks/exhaustive-deps

  //cada vez que haya match, bloquear evento en esas cartas
  useEffect(() => {
    if (resolvedCards.includes(index)) {
      setHasEvent(false);
    }
  }, [resolvedCards]); // eslint-disable-line react-hooks/exhaustive-deps

  //cada vez que acabe el juego, las cartas vuelven a su pos.inicial
  useEffect(() => {
    setIsFlipped(false);
    setHasEvent(true);
  }, [initialPosition]); // eslint-disable-line react-hooks/exhaustive-deps

  //descubrimos la carta escogida
  const handleCard = (event) => {
    const result = getCardInfo(name, index);

    if (result !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <>
      <li key={index} className="list__item">
        <ReactCardFlip isFlipped={isFlipped}>
          <img
            className="item__picture back-deck"
            alt="back deck decoration"
            src={backDeck}
            onClick={hasEvent ? handleCard : null}
            data-name={name}
            data-index={index}
          />
          <img
            className="item__picture"
            alt={name}
            title={name}
            src={picture}
            data-name={name}
            data-index={index}
            onClick={hasEvent ? handleCard : null}
          />
        </ReactCardFlip>
      </li>
    </>
  );
};

export default Card;
