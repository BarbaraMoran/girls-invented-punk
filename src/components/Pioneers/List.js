import React from "react";
import Artist from "./Artist";

const List = (props) => {
  const allArtists = props.pioneersData.map((eachPioneer) => {
    return <Artist eachPioneer={eachPioneer} />;
  });

  return <ul className="pioneers__list">{allArtists}</ul>;
};
export default List;
