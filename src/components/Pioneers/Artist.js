import React from "react";

const Artist = (props) => {
  const pioneer = props.pioneer;

  return (
    <li className="pioneer__item">
      <article className="pioneer__article">
        <h2 className="article__name">⚡{pioneer.name}⚡</h2>
        <img
          className="article__img"
          alt={pioneer.name}
          src={pioneer.picture}
        ></img>

        <div className="article__text">
          <p className="article__info">✨{pioneer.description} </p>
          <a
            className="article__link"
            href={pioneer.wiki}
            target="_blank"
            rel="noreferrer"
          >
            👉More Info
          </a>
        </div>
      </article>
    </li>
  );
};

export default Artist;
