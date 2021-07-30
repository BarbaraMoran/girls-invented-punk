import React from "react";
import PioneersHeader from "./PioneersHeader";
import List from "./List";
import pioneersData from "../../data/pioneersData.json";

const MainPioneers = () => {
  return (
    <>
      {/* <PioneersHeader /> */}
      <main className="pioneers__main" id="learn">
        <h1 className="pioneers__title">Meet the pioneers</h1>
        <List pioneersData={pioneersData} />
      </main>
    </>
  );
};

export default MainPioneers;
