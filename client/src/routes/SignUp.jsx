import React, { useEffect } from 'react'
import { Formik, Form } from 'formik';
import { Button, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
import {registration} from "../api/user";
import { getRoles } from '../api/user';
import { useDispatch } from 'react-redux';
import { setUser, setIsAuth } from "../store/userSlice"
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [show, setShow] = React.useState(false)
  const [roles, setRoles] = React.useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => setShow(!show)
  const handleSubmit = async (firstName, lastName, patronymic, email, password, roleId) => {
    const user = await registration(firstName, lastName, patronymic, email, password, roleId)
    dispatch(setUser(user))
    dispatch(setIsAuth(true))
    navigate("/")
  }
  
  useEffect(() => {
    getRoles().then(data => setRoles(data))
  }, [])
  
  return (
    <div className='flex flex-col max-w-[1500px] m-auto p-10'>
      <h1 className='m-auto text-2xl mt-5 mb-5'>Регистрация</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          patronymic: '',
          roleId: 1,
          email: '',
          password: ''
        }}
        onSubmit={async ({firstName, lastName, patronymic, email, password, roleId}) => {
          await handleSubmit(firstName, lastName, patronymic, email, password, roleId);
        }}
      >
      {({
         handleChange,
       }) => (
        <Form className='flex flex-col w-full max-w-[700px] m-auto'>
          <label htmlFor="firstName" className='mt-5 mb-3'>Имя</label>
          <Input id="firstName" name="firstName" placeholder="Jane" onChange={handleChange}/>
          <label htmlFor="lastName" className='mt-5 mb-3'>Фамилия</label>
          <Input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange}/>
          <label htmlFor="patronymic" className='mt-5 mb-3'>Отчество</label>
          <Input id="patronymic" name="patronymic" placeholder="Wilson" onChange={handleChange}/>
          <label htmlFor="role" className='mt-5 mb-3'>Роль</label>
          <Select name="roleId" id="roleId" defaultValue="1" onChange={handleChange}>
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </Select>
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
          <Button type="submit" className='w-[50%] m-auto' borderColor="rgb(118, 227, 131)" variant="outline">Зарегистрироваться</Button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default SignUp