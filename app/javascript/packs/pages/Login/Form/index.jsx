import React, { useState } from 'react';
import login from '../../../tools/api-calls';

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    identifier: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const submitForm = () => {
    login({email: inputs.identifier, password: inputs.password});
  };

  return (
    <div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" name="identifier" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleChange(e)}/>
        <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={(e) => handleChange(e)} />
      </div>
      <button type="submit" onClick={() => submitForm()} className="btn btn-primary">Submit</button>
    </div>
  )
};

export default LoginForm;
