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
    console.log('clicked');
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
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email-signin">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email-sigin"
            name="email"
            onChange={onChange}
            type="text"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            onChange={onChange}
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isInvalid}
            type="submit">
            Sign In
          </button>
          {error && <p>{error.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
