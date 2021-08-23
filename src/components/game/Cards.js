import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const allCharacters = props.characters.map((eachCharacter, index) => {
    return (
      <Card
        key={index}
        index={eachCharacter.id}
        name={eachCharacter.name}
        picture={eachCharacter.picture}
        getCardInfo={props.getCardInfo}
        unflippedCards={props.unflippedCards}
        resolvedCards={props.resolvedCards}
        initialPosition={props.initialPosition}
      />
    );
  });

  return (
    <>
      <ul className="main__cardlist"> {allCharacters} </ul>
    </>
  );
};

export default Cards;
