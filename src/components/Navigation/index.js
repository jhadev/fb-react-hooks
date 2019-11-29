import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../../hooks/useFirebase';
import AuthUserContext from '../../hooks/useAuthentication/context';
import * as ROUTES from '../../constants/routes';

const Navigation = props => {
  const { firebase } = useFirebase();
  const user = useContext(AuthUserContext);

  return (
    <nav className="mb-6 flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <NavLink
          to={ROUTES.LANDING}
          className="font-semibold text-xl tracking-tight">
          Your App
        </NavLink>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        {!user ? (
          <div className="text-sm lg:flex-grow">
            <NavLink
              to={ROUTES.SIGN_UP}
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              Sign Up
            </NavLink>
            <NavLink
              to={ROUTES.SIGN_IN}
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              Sign In
            </NavLink>
          </div>
        ) : (
          <div className="text-sm lg:flex-grow">
            <NavLink
              to={ROUTES.HOME}
              className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
              Home
            </NavLink>
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
              onClick={firebase.doSignOutUser}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
