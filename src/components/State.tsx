import React from "react";
import Count from "./Count";
import FunctionParameters from "./FunctionParameters";

const State = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <Count />
        </div>
        <div className="col-sm-6">
          <FunctionParameters />
        </div>
      </div>
    </>
  );
};

export default State;
