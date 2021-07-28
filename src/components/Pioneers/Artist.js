import React from "react";

const Artist = (props) => {
  const pioneer = props.eachPioneer;

  return (
    <li classname="pioneer__item">
      <article>
        <h2 classname="article__name">⚡{pioneer.name}⚡</h2>
        <img
          classname="article__img"
          alt={pioneer.name}
          src={pioneer.picture}
        ></img>
        <p classname="article__info">✨{pioneer.description} </p>
        <a
          classname="article__link"
          href={pioneer.wiki}
          target="_blank"
          rel="noreferrer"
        >
          👉More Info
        </a>
      </article>
    </li>
  );
};

export default Artist;
