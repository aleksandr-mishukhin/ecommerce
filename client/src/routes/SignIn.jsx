import React from 'react'
import { Formik, Form } from 'formik';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { login } from '../api/user';
import { useDispatch } from 'react-redux';
import { setIsAuth, setUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className='flex flex-col max-w-[1500px] m-auto p-10'>
      <h1 className='m-auto text-2xl mt-5 mb-5'>Логин</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async ({email, password}) => {
          const user = await login(email, password)
          dispatch(setUser(user))
          dispatch(setIsAuth(true))
          navigate("/")
        }}
      >
        {({
         handleChange,
       }) => (
        <Form className='flex flex-col w-full max-w-[700px] m-auto'>
          <label htmlFor="email" className='mt-5 mb-3'>Эл. почта</label>
          <Input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            className='mb-5'
            onChange={handleChange}
          />
          <label htmlFor="password" className='mt-5 mb-3'>Пароль</label>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              id="password"
              name="password"
              className='mb-5'
              onChange={handleChange}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" className='w-[50%] m-auto' borderColor="rgb(118, 227, 131)" variant="outline">Войти</Button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default SignIn