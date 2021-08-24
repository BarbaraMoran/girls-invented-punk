import React from "react";

const Counter = (props) => {
  const { matchsNumber, totalpairs } = props;

  return (
    <>
      <h5 className="counter">
        {matchsNumber}/ {totalpairs} matches
      </h5>
    </>
  );
};

export default Counter;
