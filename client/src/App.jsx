import { useEffect, useState } from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Admin from './routes/Admin';
import Product from "./routes/Product"
import User from './routes/User';
import Cart from './routes/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { check, getRole } from './api/user';
import { setIsAuth, setUser } from './store/userSlice';

const theme = extendTheme({
  fonts: {
    heading: `"Comic Sans MS", "Comic Sans", cursive`,
    body: `"Comic Sans MS", "Comic Sans", cursive`,
  },
})

function App() {
  const [role, setRole] = useState({id: 1, name: "Клиент"})
  const isAuth = useSelector(state => state.user.isAuth)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    check().then(data => {
      dispatch(setUser(data))
      dispatch(setIsAuth(true))
    }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (user.roleId) {
      getRole(user.roleId).then(role => setRole(role))
    }
  }, [user])

  return (
    <ChakraProvider theme={theme}>
      <Routes >
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          {isAuth && role.name === "Админ" && <Route path="admin" element={<Admin />} />}
          <Route path="product/:id" element={<Product />} />
          {isAuth && <Route path="user" element={<User />} />}
          {isAuth && <Route path="cart" element={<Cart />} />}
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App;