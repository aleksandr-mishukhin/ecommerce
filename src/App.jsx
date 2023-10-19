import * as React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Checkout from './routes/Checkout';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import Admin from './routes/Admin';
import Product from "./routes/Product"
import User from './routes/User';

const theme = extendTheme({
  fonts: {
    heading: `"Comic Sans MS", "Comic Sans", cursive`,
    body: `"Comic Sans MS", "Comic Sans", cursive`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes >
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App;