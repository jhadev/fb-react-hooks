import { useState, useEffect } from 'react';
import { useFirebase } from '../useFirebase';

const useAuthentication = () => {
  // access to all firebase methods
  const { firebase } = useFirebase();
  // this will be provied to the context in App.js to wrap the entire app.
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // this method is provided to us from firebase
    // if user is authed setAuthUser to response from firebase
    // else set it to null
    const listener = () => {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          setAuthUser(authUser);
        } else {
          setAuthUser(null);
        }
      });
    };
    // execute listener
    listener();
    // on unmount remove the listener
    return () => listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { authUser };
};

export { useAuthentication };
