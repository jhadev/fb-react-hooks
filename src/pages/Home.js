import React, { useContext } from 'react';
import AuthUserContext from '../hooks/useAuthentication/context';

const Home = () => {
  const user = useContext(AuthUserContext);
  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Home;
