import React from "react";
import FunctionComponentProps from "./FunctionComponentProps";
import ClassComponentProps from "./ClassComponentProps";
import FunctionComponentWithTypeProps from "./FunctionComponentWithTypeProps";
const Props = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <FunctionComponentProps name="Ranjit" salary={25000} />
        </div>
        <div className="col-sm-6">
          <ClassComponentProps salary={60000} />
        </div>
        <div className="col-sm-6">
          <FunctionComponentWithTypeProps name="Pradeep" salary={55000} />
        </div>
      </div>
    </>
  );
};

export default Props;
