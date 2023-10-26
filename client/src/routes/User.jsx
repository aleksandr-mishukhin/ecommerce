import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
  const user = useSelector(state => state.user.user)
  return (
    <div className='max-w-[1000px] w-[1000px] m-auto mb-10 mt-10 flex flex-col justify-center align-middle gap-5'>
      <div>Имя: {user.firstName}</div>
      <div>Фамилия: {user.lastName}</div>
      <div>Отчество: {user.patronymic}</div>
      <div>Почта: {user.email}</div>
    </div>
  )
}

export default User