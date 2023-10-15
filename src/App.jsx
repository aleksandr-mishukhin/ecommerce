import * as React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Checkout from './routes/Checkout';

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
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App;