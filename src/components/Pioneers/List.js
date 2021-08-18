import React from "react";
import Artist from "./Artist";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const List = (props) => {
  const allArtists = props.pioneersData.map((eachPioneer) => {
    return (
      <Carousel.Item interval={30000}>
        <Artist pioneer={eachPioneer} />
      </Carousel.Item>
    );
  });

  return (
    <ul className="pioneers__list">
      <Carousel variant="dark">{allArtists}</Carousel>
    </ul>
  );
};
export default List;
