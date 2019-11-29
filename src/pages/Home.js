import React from 'react';
import { useAuthorization } from '../hooks/useAuthorization';

const Home = () => {
  // grab the user data from the context, if properly authed will show the email of the user.
  // anywhere user data is needed import AuthUserContext and useContext to get access to response from firebase.
  const user = useAuthorization();

  return (
    user && (
      <div>
        <h1>{user.email}</h1>
      </div>
    )
  );
};

export default Home;
