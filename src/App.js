import React from 'react';
import { useFirebase } from './hooks/useFirebase';
import { useAuthentication } from './hooks/useAuthentication';
import AuthUserContext from './hooks/useAuthentication/context';

const App = () => {
  const { firebase } = useFirebase();
  console.log(firebase);
  const { authUser } = useAuthentication();

  console.log(authUser);
  return (
    <AuthUserContext.Provider value={authUser}>
      <div>
        <h1>Hi!</h1>
      </div>
    </AuthUserContext.Provider>
  );
};

export default App;
