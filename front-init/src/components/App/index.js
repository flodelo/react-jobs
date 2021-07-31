// == Import npm
import React, { useEffect, useState } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import { BASE_URL } from '../constants/apiConstants';
// == Import
import './styles.css';

import Header from '../Header';
import MenuBurger from '../Header/MenuBurger';
import Search from '../Search';
import RegistrationForm from '../Header/RegistrationForm';
import LogInForm from '../Header/LogInForm';
import Footer from '../Footer';
import AdminForm from '../AdminForm';
import About from '../Header/About';
import Contact from '../Header/Contact';


// == Composant
export default function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

  fetch(BASE_URL +'/jobs/pe')
    .then(data => {
      // console.log(data);
      return data.json();
    })
    .then(data => {
      data = data.slice(0, 50)
      // console.log(data);
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
            <Footer />
          </Route>
          <Route path="/register">
            <Header />
            <RegistrationForm />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Header />
            <LogInForm />
            <Footer />
          </Route>
          <Route path="/login/adminform">
            <Header />
            <AdminForm />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
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
