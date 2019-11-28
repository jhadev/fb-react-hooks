import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import * as ROUTES from '../../constants/routes';

const reducer = (currentState, newState) => {
  return { ...currentState, ...newState };
};

const SignInForm = props => {
  // built in history hook from react-router allows us to move around the app
  const history = useHistory();
  // access to all firebase methods
  const { firebase } = useFirebase();

  // this handles setState just like this.setState
  const [state, setState] = useReducer(reducer, {
    email: '',
    password: '',
    error: null
  });

  const { email, password, error } = state;

  const onChange = event => {
    const { name, value } = event.target;

    setState({ [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    localStorage.setItem('email', email);

    firebase
      .doSignInUser(email, password)
      .then(() => {
        setState({ email: '', password: '', error: null });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setState({ error });
      });
  };

  const isInvalid = password === '' || email === '';

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-12">
        <h1>Sign In!</h1>
        <form onSubmit={onSubmit}>
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
              name="password"
              value={password}
              onChange={onChange}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="btn btn-primary mb-2"
            disabled={isInvalid}
            type="submit">
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
