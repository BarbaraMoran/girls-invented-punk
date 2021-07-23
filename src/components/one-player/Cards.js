import React from "react";
import Card from "./Card";
import "../../stylesheets/components/Cards.scss";

const Cards = (props) => {
  let resultRandom;

  function getRandomOrder() {
    resultRandom = props.characters.sort(function () {
      return 0.5 - Math.random();
    });
    return resultRandom;
  }

  getRandomOrder();

  const allCharacters = props.characters.map((eachCharacter) => {
    return (
      <li key={eachCharacter.id} className="list__item">
        <Card eachCharacter={eachCharacter} />
      </li>
    );
  });
  return (
    <>
      <ul className="main__cardlist"> {allCharacters} </ul>
    </>
  );
};

export default Cards;
