import React, { useState, FC } from "react";

interface IPROPS {
  salary: number;
  name: string;
}

interface ISTATE {
  age: number;
  address: {
    city: string;
  };
}

const data = {
  age: 36,
  address: { city: "Hyderabad" },
};

const FunctionComponentProps: FC<IPROPS> = (props) => {
  const [state, setState] = useState<ISTATE>(data);

  const changeAge = () => {
    setState({ ...state, age: 20 });
  };
  React.useEffect(() => {
    changeAge();
    //eslint-disa
  }, []);
  return (
    <>
      <h5 className="bg-primary p-2 text-white">Functional Component</h5>
      <p>My Salary :{props.salary}</p>
      <p>Name :{props.name}</p>
      <h6 className="bg-primary p-2 text-white">States Example</h6>
      <p>Age :{state.age}</p>
      <p>City :{state.address?.city}</p>
    </>
  );
};

export default FunctionComponentProps;
