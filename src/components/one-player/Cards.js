import React from "react";
import Card from "./Card";
import "../../stylesheets/components/Cards.scss";

const Cards = (props) => {
  const allCharacters = props.characters.map((eachCharacter) => {
    return (
      <Card
        eachCharacter={eachCharacter}
        handleCard={props.handleCard}
        cardsSelection={props.cardsSelection}
        className={props.className}
        //characterIsHidden={props.characterIsHidden}
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
