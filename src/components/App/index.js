// == Import npm
import * as React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

// == Import
import './styles.css';

import Header from '../Header';
import JobDetails from '../JobDetails';
import Search from '../Search';
import JobsList from '../JobsList';
import RegistrationForm from '../Header/RegistrationForm';
import LogInForm from '../Header/LogInForm';
import Footer from '../Footer';

// == Composant
export default function footer() {
  return (
    <ChakraProvider>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Search />
            <JobsList />
            <Footer />
          </Route>
          <Route path="/register">
            <Header />
            <RegistrationForm />
            <Footer />
          </Route>
          <Route path="/login">
            <Header />
            <LogInForm />
            <Footer />
          </Route>
          {/* <Route>
          <Error />
        </Route> */}
        </Switch>
      </div>
    </ChakraProvider>

  );
}

