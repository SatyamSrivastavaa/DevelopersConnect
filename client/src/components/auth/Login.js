import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

// ACTIONS
import { setAlert } from '../../actions/alert';

const Login = ({setAlert}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (true) {
      setAlert("Passwords does not match!!!", 'danger');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign into Your Account
      </p>
      <form className="form" action="dashboard.html">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={email} onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" onClick={handleSubmit} />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default connect(null, {setAlert})(Login);
