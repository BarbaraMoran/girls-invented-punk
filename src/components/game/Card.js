import React from "react";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import backDeck from "../../images/card5.jpg";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  //volver a cubrir las cartas erradas tras x segundos
  useEffect(() => {
    if (props.unflippedCards.includes(props.index)) {
      setTimeout(() => setIsFlipped(false), 1200);
    }
  }, [props.unflippedCards]); // eslint-disable-line react-hooks/exhaustive-deps

  //cada vez que haya match, bloquear evento en esas cartas
  useEffect(() => {
    if (props.resolvedCards.includes(props.index)) {
      setHasEvent(false);
    }
  }, [props.resolvedCards]); // eslint-disable-line react-hooks/exhaustive-deps

  //
  useEffect(() => {
    setIsFlipped(false);
    setHasEvent(true);
  }, [props.initialPosition]); // eslint-disable-line react-hooks/exhaustive-deps

  //descubrimos la carta escogida
  const handleCard = (event) => {
    const result = props.getCardInfo(props.name, props.index);

    if (result !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <>
      <li key={props.index} className="list__item">
        <ReactCardFlip isFlipped={isFlipped}>
          <img
            className="item__picture back-deck"
            alt="back deck decoration"
            src={backDeck}
            onClick={hasEvent ? handleCard : null}
            data-name={props.name}
            data-index={props.index}
          />
          <img
            className="item__picture"
            alt={props.name}
            title={props.name}
            src={props.picture}
            data-name={props.name}
            data-index={props.index}
            onClick={hasEvent ? handleCard : null}
          />
        </ReactCardFlip>
      </li>
    </>
  );
};

export default Card;
