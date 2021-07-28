// == Import npm
import React, { useEffect, useState } from 'react';

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
export default function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

  fetch('http://localhost:5050/jobs/pe')
    .then(data => {
      console.log(data);
      return data.json();
    })
    .then(data => {
      data = data.slice(0, 50)
      console.log(data);
      setJobs(data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <ChakraProvider>
              <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Search jobs={jobs} />
            {/* <JobsList jobs={jobs}/> */}
            <Footer />
          </Route>
          <Route path="/job/:id" exact>
            <JobDetails
              jobs={jobs}
            />
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

/* import {useState, useEffect} from 'react'

function App() {

  const [dataImg, setDataImg] = useState();

  useEffect(() => {

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      setDataImg(data[0].url)
    })
  }, [])

  return (
    <div className="App">
      {dataImg &&
      <img src={dataImg}
      alt="cat image" style={{width: "500px"}}
      />}
    </div>
  );
}

*/
