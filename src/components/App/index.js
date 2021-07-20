// == Import npm
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// == Import
import './styles.css';

import Header from '../Header';
import Search from '../Search';
import List from '../List';


// == Composant
const App = ({ Component }) => (
  <ChakraProvider>
    <div className="app">
      <Header />
      <Search />
      <List />
    </div>
  </ChakraProvider>
);

// == Export
export default App;
