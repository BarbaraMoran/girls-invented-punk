import React from "react";
import List from "./List";
import HomeButton from "../HomeButton";
import pioneersData from "../../data/pioneersData.json";

const MainPioneers = () => {
  return (
    <>
      <section className="pioneers__section" id="learn">
        <HomeButton />
        <h2 className="pioneers__title">Meet the pioneers</h2>
        <List pioneersData={pioneersData} />
        <HomeButton />
      </section>
    </>
  );
};

export default MainPioneers;
