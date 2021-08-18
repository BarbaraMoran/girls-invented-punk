import React from "react";
import Artist from "./Artist";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

const List = (props) => {
  const allArtists = props.pioneersData.map((eachPioneer) => {
    return (
      <MDBCarouselItem itemId={eachPioneer.id}>
        <Artist pioneer={eachPioneer} />
      </MDBCarouselItem>
    );
  });

  return (
    <>
      <ul className="pioneers__list">
        <MDBCarousel showControls interval={50000} dark>
          <MDBCarouselInner>
            <MDBCarouselItem itemId={0}>
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
