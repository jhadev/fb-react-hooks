import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import * as ROUTES from '../../constants/routes';

const reducer = (currentState, newState) => {
  return { ...currentState, ...newState };
};

const SignUpForm = props => {
  const { firebase } = useFirebase();
  const history = useHistory();
  const [state, setState] = useReducer(reducer, {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  });

  const { username, email, passwordOne, passwordTwo, error } = state;

  const onChange = event => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();

    firebase
      .doCreateUser(email, passwordOne)
      .then(authUser => {
        setState({
          username: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
          error: null
        });
        // send them somewhere here
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setState({ error });
      });
  };

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  return (
    <div>
      <h1>Sign Up!</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name="username"
            value={username}
            onChange={onChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            value={email}
            onChange={onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="passwordOne"
            value={passwordOne}
            onChange={onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="passwordTwo"
            value={passwordTwo}
            onChange={onChange}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default SignUpForm;
