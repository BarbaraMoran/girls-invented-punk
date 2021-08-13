import React from "react";

const Counter = (props) => {
  return (
    <>
      <h5 className="counter">
        {props.matchsNumber} / {props.totalpairs} matches
      </h5>
    </>
  );
};

export default Counter;
