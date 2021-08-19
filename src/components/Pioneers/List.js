import React from "react";
import Artist from "./Artist";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const List = (props) => {
  const allArtists = props.pioneersData.map((eachPioneer) => {
    return (
      <MDBCarouselItem itemId={eachPioneer.id} interval={30000}>
        <Artist pioneer={eachPioneer} />
      </MDBCarouselItem>
    );
  });

  return (
    <>
      <ul className="pioneers__list">
        <MDBCarousel showControls dark>
          <MDBCarouselInner>
            <MDBCarouselItem interval={3000} itemId={0}>
              <div className="carousel__title">
                <h2 className="title-pioneers">Meet the Pioneers</h2>
              </div>
            </MDBCarouselItem>
            {allArtists}
          </MDBCarouselInner>
        </MDBCarousel>
      </ul>
    </>
  );
};
export default List;
