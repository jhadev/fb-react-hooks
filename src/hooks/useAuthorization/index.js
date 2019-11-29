import { useEffect, useContext } from 'react';
import AuthUserContext from '../useAuthentication/context';
import { useFirebase } from '../useFirebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const useAuthorization = () => {
  const history = useHistory();
  const { firebase } = useFirebase();
  const user = useContext(AuthUserContext);

  useEffect(() => {
    const listener = () =>
      firebase.auth.onAuthStateChanged(authUser => {
        // if auth fails send the user to the signin page
        if (!authUser) {
          // with history object of from react router
          history.push(ROUTES.SIGN_IN);
        }
      });
    listener();
    return () => listener();
  }, [firebase.auth, history, user]);

  return user;
};

export { useAuthorization };
