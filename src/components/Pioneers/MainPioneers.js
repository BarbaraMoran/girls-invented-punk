import React from "react";
import List from "./List";
import HomeButton from "../landing/HomeButton";
import pioneersData from "../../data/pioneersData.json";

const MainPioneers = () => {
  return (
    <>
      <section className="pioneers__section" id="learn">
        <HomeButton />
        <List pioneersData={pioneersData} />
        <HomeButton />
      </section>
    </>
  );
};

export default MainPioneers;
