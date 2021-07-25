import React from "react";
import Card from "./Card";
import "../../stylesheets/components/Cards.scss";

const Cards = (props) => {
  const handleCard = () => {
    props.handleCard();
  };

  const allCharacters = props.characters.map((eachCharacter) => {
    return <Card eachCharacter={eachCharacter} handleCard={handleCard} />;
  });
  return (
    <>
      <ul className="main__cardlist"> {allCharacters} </ul>
    </>
  );
};

export default Cards;
