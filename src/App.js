import React, { Fragment } from 'react';
import { useFirebase } from './hooks/useFirebase';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuthentication } from './hooks/useAuthentication';
import AuthUserContext from './hooks/useAuthentication/context';
import Landing from './pages/Landing';
import Home from './pages/Home';
import * as ROUTES from './constants/routes';

const App = () => {
  const { firebase } = useFirebase();
  console.log(firebase);
  const { authUser } = useAuthentication();

  console.log(authUser);
  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
        <Fragment>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.HOME} component={Home} />
          {/* <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.ACCOUNT} component={Account} /> */}
        </Fragment>
      </Router>
    </AuthUserContext.Provider>
  );
};

export default App;
