type Props = {
  name: string;
  salary: number;
};

const FunctionComponentWithTypeProps = (props: Props) => {
  return (
    <>
      <h5 className="bg-primary p-2 text-white">
        Functional Component with Type Props
      </h5>
      <p>My Salary :{props.salary}</p>
      <p>Name :{props.name}</p>
    </>
  );
};

export default FunctionComponentWithTypeProps;
