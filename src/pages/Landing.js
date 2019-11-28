import React from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const Landing = () => {
  return (
    // make separate pages for this. this is just for display
    <>
      <SignUpForm />
      <SignInForm />;
    </>
  );
};

export default Landing;
