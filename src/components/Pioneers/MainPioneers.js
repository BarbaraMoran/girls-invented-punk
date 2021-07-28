import React from "react";
import PioneersHeader from "./PioneersHeader";
import List from "./List";
import pioneersData from "../../data/pioneersData.json";

const MainPioneers = () => {
  return (
    <>
      <PioneersHeader />
      <main>
        <List />
      </main>
    </>
  );
};

export default MainPioneers;
