import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const allCharacters = props.characters.map((eachCharacter) => {
    return (
      <li key={eachCharacter.id} className="list__item">
        <Card eachCharacter={eachCharacter} />
      </li>
    );
  });
  return (
    <>
      <ul className="main__cardList"> {allCharacters} </ul>
    </>
  );
};

export default Cards;
