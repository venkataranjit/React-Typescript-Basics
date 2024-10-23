import React, { useState, ChangeEvent, FormEvent } from "react";

interface ISTATE {
  username: string;
  password: string;
}
const initialForm: ISTATE = {
  username: "",
  password: "",
};
const Form = () => {
  const [state, setState] = useState<ISTATE>(initialForm);
  const [value, setValue] = useState<ISTATE>(initialForm);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue(state);
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <form className="card" onSubmit={handleSubmit}>
            <fieldset className="m-3">
              <legend>Form</legend>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="form-control"
                  placeholder="User Name"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
          <div className="card mt-3 p-3">
            <p>Name: {value.username}</p>
            <p>Password: {value.password}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
