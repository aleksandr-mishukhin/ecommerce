import React from 'react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Logo from "../logo.png"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const isAuth = useSelector(state => state.user.isAuth)
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
        <div className='flex gap-10 h-full'>
          <Link href="/signin" className="h-full flex items-center">Войти</Link>
          <Link href="/signup" className="h-full flex items-center">Регистрация</Link>
          {isAuth && <Link href="/cart" className="h-full flex items-center">Корзина</Link>}
          {isAuth && <Link href="/admin" className="h-full flex items-center">Админ панель</Link>}
          {isAuth && <Link href="/user" className="h-full flex items-center">Профиль</Link>}
          {isAuth && <Link className="h-full flex items-center" onClick={() => {}}>Выйти</Link>}
        </div>
      </header>
    </div>
    <Outlet />
    </>
  )
}

export default Navigation