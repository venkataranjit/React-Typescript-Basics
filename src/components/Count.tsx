import React from "react";

const Count = () => {
  const [count, setCount] = React.useState<number>(0);
  const inc = (): void => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h5>Count</h5>
      <div className="card col-sm-6">
        <div className="card-body text-center">
          <h2 className="display">{count}</h2>
          <button className="btn btn-success mx-1" onClick={inc}>
            +
          </button>
          <button className="btn btn-danger mx-1" onClick={dec}>
            -
          </button>
          <button className="btn btn-secondary mx-1" onClick={reset}>
            &#x21bb;
          </button>
        </div>
      </div>
    </>
  );
};

export default Count;
