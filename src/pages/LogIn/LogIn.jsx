import React from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';

const LogIn = ({LogInUserOn}) => {

  const onLoginVerification = (LogInUser) => {
    LogInUserOn(LogInUser)
  }

  return (

    <LogInForm onLoginVerification={onLoginVerification} />

  )
}

export default LogIn;