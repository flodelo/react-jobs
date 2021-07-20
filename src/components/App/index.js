// == Import npm
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// == Import
import './styles.css';

import Header from '../Header';
import JobDetails from '../JobDetails';
import Search from '../Search';
import JobsList from '../JobsList';


// == Composant
const App = ({ Component }) => (
  <ChakraProvider>
    <div className="app">
      <Header />
      <Search />
      <JobsList />
    </div>
  </ChakraProvider>
);

// == Export
export default App;
