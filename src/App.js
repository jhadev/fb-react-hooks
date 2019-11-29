import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useFirebase } from './hooks/useFirebase';
import { useAuthentication } from './hooks/useAuthentication';
import AuthUserContext from './hooks/useAuthentication/context';
import Landing from './pages/Landing';
import Yo404 from './pages/Yo404';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navigation from './components/Navigation';
import * as ROUTES from './constants/routes';

const App = () => {
  const { firebase } = useFirebase();
  // all firebase methods located in hooks/useFirebase/firebase.js you can add more there.
  // ex: manage real-time db methods
  console.log(firebase);
  const { authUser } = useAuthentication();
  // will be null if not logged in, if authed response will be from firebase
  console.log(authUser);

  /* the AuthUserContext is now accessible anywhere in the tree, either by using the useContext hook
   in a functional component or using <AuthUserContext.Consumer> in a class component. See React docs on
   context api for more info
  */

  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route component={Yo404} />
        </Switch>
      </Router>
    </AuthUserContext.Provider>
  );
};

export default App;
