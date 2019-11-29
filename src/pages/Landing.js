import React from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const Landing = () => {
  return (
  <div className="flex flex-wrap">
    <div className="w-1/4 ml-auto h-12">
      <SignUpForm />
    </div>
    <div className="w-1/4 mr-auto h-12">
      <SignInForm />
    </div>
  </div>    
  );
};

export default Landing;
