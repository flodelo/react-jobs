// == Import npm
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// == Import
import './styles.css';

import Header from '../Header';
import Search from '../Search';

// == Composant
const App = ({ Component }) => (
  <ChakraProvider>
    <div className="app">
      <Header />
      <Search />
    </div>
  </ChakraProvider>
);

// == Export
export default App;
