import React from "react";
import "../../stylesheets/components/Card.scss";

const Card = (props) => {
  console.log(props.className);

  const handleCard = (event) => {
    props.handleCard({
      name: event.currentTarget.dataset.name,
      id: event.currentTarget.dataset.id,
    });
  };

  return (
    <>
      <li
        key={props.eachCharacter.id}
        className="list__item"
        onClick={handleCard}
        data-name={props.eachCharacter.name}
        data-id={props.eachCharacter.id}
      >
        <img
          className={`item__picture ${props.className}`}
          alt={props.eachCharacter.name}
          src={props.eachCharacter.picture}
        />
      </li>
    </>
  );
};

export default Card;
