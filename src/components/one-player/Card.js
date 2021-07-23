import React from "react";
import "../../stylesheets/components/Card.scss";

const Card = (props) => {
  return (
    <>
      <img className="item__picture" src={props.eachCharacter.picture} />
    </>
  );
};

export default Card;
