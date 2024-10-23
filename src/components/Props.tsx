import React from "react";
import FunctionComponentProps from "./FunctionComponentProps";
import ClassComponentProps from "./ClassComponentProps";
const Props = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <FunctionComponentProps salary={25000} name="Ranjit" />
        </div>
        <div className="col-sm-6">
          <ClassComponentProps salary={60000} />
        </div>
      </div>
    </>
  );
};

export default Props;
