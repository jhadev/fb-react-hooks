import React from 'react';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/3 ml-auto mr-auto h-12">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
