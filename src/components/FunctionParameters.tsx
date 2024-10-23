import React, { useState } from "react";

interface ISTATE {
  user: string;
}
const FunctionParameters = () => {
  const [state, setState] = useState<ISTATE>({ user: "" });
  const handleUser = (userName: string) => {
    setState({ user: userName });
  };
  return (
    <>
      <h5>Function Parameters</h5>
      <div className="card col-sm-6">
        <div className="card-body text-center">
          <h2 className="display">Hello {state.user}</h2>
          <button
            className="btn btn-success mx-2"
            onClick={() => handleUser("Ranjit")}
          >
            Ranjit
          </button>
          <button
            className="btn btn-success mx-2"
            onClick={() => handleUser("Venky")}
          >
            Venky
          </button>
        </div>
      </div>
    </>
  );
};

export default FunctionParameters;
