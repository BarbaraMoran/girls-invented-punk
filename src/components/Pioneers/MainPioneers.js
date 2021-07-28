import React from "react";
import PioneersHeader from "./PioneersHeader";
import List from "./List";
import pioneersData from "../../data/pioneersData.json";

const MainPioneers = () => {
  return (
    <>
      <PioneersHeader />
      <main>
        <h1 className="pioneers__title">Meet the pioneers</h1>
        <List />
      </main>
    </>
  );
};

export default MainPioneers;
