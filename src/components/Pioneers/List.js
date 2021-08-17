import React from "react";
import Artist from "./Artist";
import { Slider } from "@lifarl/react-scroll-snap-slider";

const List = (props) => {
  const allArtists = props.pioneersData.map((eachPioneer) => {
    return <Artist eachPioneer={eachPioneer} />;
  });

  return <Slider>{allArtists}</Slider>;
};

export default List;
