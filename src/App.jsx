import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Checkout from './routes/Checkout';

function App() {
  return (
    <ChakraProvider>
      <Routes >
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App;