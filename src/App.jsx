import * as React from 'react'

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
import { useSelector } from 'react-redux';

const theme = extendTheme({
  fonts: {
    heading: `"Comic Sans MS", "Comic Sans", cursive`,
    body: `"Comic Sans MS", "Comic Sans", cursive`,
  },
})

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    <ChakraProvider theme={theme}>
      <Routes >
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          {isAuth && <Route path="admin" element={<Admin />} />}
          <Route path="product/:id" element={<Product />} />
          <Route path="user" element={<User />} />
          {isAuth && <Route path="cart" element={<Cart />} />}
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App;