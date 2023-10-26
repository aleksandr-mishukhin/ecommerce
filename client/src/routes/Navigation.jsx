import React, { useEffect, useState } from 'react'
import { Button, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Logo from "../logo.png"
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRole } from '../api/user'
import { setIsAuth, setUser } from '../store/userSlice'

const Navigation = () => {
  const [role, setRole] = useState({})
  const isAuth = useSelector(state => state.user.isAuth)
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(setUser({}))
    dispatch(setIsAuth(false))
    localStorage.removeItem('token')
    navigate("/signin")
  }

  useEffect(() => {
    if (user.roleId) {
      getRole(user.roleId).then(role => setRole(role))
    }
  }, [user])

  return (
    <>
    <div className='sticky top-0 w-full z-10 bg-main border-b-gray-200 border-[.5px]'>
      <header className='h-20 flex items-center justify-between pl-10  pr-10 max-w-[1500px] w-full m-auto'>
        <Link href="/">
          <Image
            boxSize='40px'
            src={Logo}
          />
        </Link>
        <div className='flex gap-10 h-full items-center'>
          {!isAuth && <Link href="/signin" className="h-full flex items-center">Войти</Link>}
          {!isAuth && <Link href="/signup" className="h-full flex items-center">Регистрация</Link>}
          {isAuth && <Link href="/cart" className="h-full flex items-center">Корзина</Link>}
          {isAuth && role.name === "Админ" && <Link href="/admin" className="h-full flex items-center">Админ панель</Link>}
          {isAuth && <Link href="/user" className="h-full flex items-center">Профиль</Link>}
          {isAuth && <Button className="h-full flex items-center justify-center" onClick={handleLogOut}>Выйти</Button>}
        </div>
      </header>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation