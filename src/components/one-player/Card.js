import React from "react";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "../../stylesheets/components/Card.scss";
import backDeck from "../../images/backdeck.jpg";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  useEffect(() => {
    if (props.unflippedCards.includes(props.index))
      setTimeout(() => setIsFlipped(false), 1000);
  }, [props.unflippedCards]);

  useEffect(() => {
    if (props.resolvedCards.includes(props.index)) {
      setHasEvent(false);
    }
  }, [props.resolvedCards]);

  const handleCard = (event) => {
    const result = props.getCardInfo({
      name: event.currentTarget.dataset.name,
      index: event.currentTarget.dataset.index,
    });

    if (result !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <>
      <li key={props.index} className="list__item">
        <ReactCardFlip isFlipped={isFlipped}>
          <img
            className="item__picture"
            alt="deck decoration"
            src={backDeck}
            onClick={hasEvent ? handleCard : null}
            data-name={props.name}
            data-index={props.index}
          />
          <img
            className="item__picture"
            alt={props.name}
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
