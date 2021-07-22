import React from "react";

const Card = (props) => {
  return (
    <>
      <h2 className="item__name">{props.eachCharacter.name}</h2>
      <img className="item__picture" src={props.eachCharacter.picture} />
    </>
  );
};

export default Card;
