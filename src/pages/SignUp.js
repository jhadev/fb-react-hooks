import React from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/3 ml-auto mr-auto h-12">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
