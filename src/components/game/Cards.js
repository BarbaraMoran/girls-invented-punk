import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const {
    characters,
    getCardInfo,
    unflippedCards,
    resolvedCards,
    initialPosition,
  } = props;

  const allCharacters = characters.map((eachCharacter, index) => {
    return (
      <Card
        key={index}
        index={eachCharacter.id}
        name={eachCharacter.name}
        picture={eachCharacter.picture}
        getCardInfo={getCardInfo}
        unflippedCards={unflippedCards}
        resolvedCards={resolvedCards}
        initialPosition={initialPosition}
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
