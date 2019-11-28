import { useState, useEffect } from 'react';
import { useFirebase } from '../useFirebase';

const useAuthentication = () => {
  const { firebase } = useFirebase();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listener = () => {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          setAuthUser(authUser);
        } else {
          setAuthUser(null);
        }
      });
    };

    listener();
    return () => listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { authUser };
};

export { useAuthentication };
