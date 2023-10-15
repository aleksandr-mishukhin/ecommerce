import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Button, Input, Select } from '@chakra-ui/react';
import SignUp from '../components/SignUp';
const Authentication = () => {
  const showSignUp = true;
  return (
    showSignUp ? <SignUp /> : null
  )
}

export default Authentication