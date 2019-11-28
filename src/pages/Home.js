import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthUserContext from '../hooks/useAuthentication/context';
import * as ROUTES from '../constants/routes';

const Home = () => {
  // grab the user data from the context, if properly authed will show the email of the user.
  // anywhere user data is needed import AuthUserContext and useContext to get access to response from firebase.
  const user = useContext(AuthUserContext);

  // if user is null redirect to landing page with for sign in
  // else render the home page
  return !user ? (
    <Redirect to={ROUTES.LANDING} />
  ) : (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Home;
