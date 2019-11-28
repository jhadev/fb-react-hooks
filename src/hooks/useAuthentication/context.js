import { createContext } from 'react';

// this will handle the context for the authenticated user. It allows use to have access to it anywhere in the app without passing down props.
const AuthUserContext = createContext(null);

export default AuthUserContext;
