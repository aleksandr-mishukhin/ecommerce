import React from 'react'
import { Formik, Form } from 'formik';
import { Button, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react';

const SignUp = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <div className='flex flex-col max-w-[1500px] m-auto p-10'>
      <h1 className='m-auto text-2xl mt-5 mb-5'>Регистрация</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          patronymic: '',
          role: 'Клиент',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
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
          <Select name="role" id="role" defaultValue="Клиент" onChange={handleChange}>
            <option>Администратор</option>
            <option>Менеджер</option>
            <option>Клиент</option>
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