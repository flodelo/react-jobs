// == Import npm
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// == Import
import './styles.css';

import Header from '../Header';
import JobDetails from '../JobDetails';
import Search from '../Search';
import JobsList from '../JobsList';
import RegistrationForm from '../Header/RegistrationForm';
import LogInForm from '../Header/LogInForm';



// == Composant
const App = ({ Component }) => (
  <ChakraProvider>
    <div className="app">
      <Header />
      <Search />
      <JobsList />
      <RegistrationForm />
      <LogInForm />
    </div>
  </ChakraProvider>
);

// == Export
export default App;
