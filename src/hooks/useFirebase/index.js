import { useContext } from 'react';
import FirebaseContext from './context';

const useFirebase = () => {
  const firebase = useContext(FirebaseContext);

  return { firebase };
};

export { useFirebase };
