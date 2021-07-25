import React from "react";
import "../../stylesheets/components/Card.scss";

const Card = (props) => {
  const handleCard = (event) => {
    props.handleCard({ name: event.target.dataset.name });
  };

  return (
    <>
      <li
        key={props.eachCharacter.id}
        className={`list__item ${props.cardStyle}`}
        onClick={handleCard}
        data-name={props.eachCharacter.name}
      >
        <img className="item__picture" src={props.eachCharacter.picture} />
      </li>
    </>
  );
};

export default Card;
