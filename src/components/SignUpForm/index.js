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
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="full-name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="full-name"
            name="username"
            onChange={onChange}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            onChange={onChange}
            type="text"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordOne">
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="passwordOne"
            onChange={onChange}
            id="passwordOne"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordTwo">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="passwordTwo"
            onChange={onChange}
            id="passwordTwo"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">Confirm password</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isInvalid}
            type="submit">
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
