import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import axios from 'axios';
// import { withRouter } from "react-router-dom";

import { Twemoji } from 'react-emoji-render';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Link,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function RegistrationForm() {
  const history = useHistory();
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    // confirmPassword: '',
    // successMessage: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    // if (state.email.length && state.password.length) {
      // props.showError(null);
      const payload = {
        "firstname" : state.firstname,
        "lastname" : state.lastname,
        "email" : state.email,
        "password" : state.password,
        // "role" : "User-Agent", (deleted > Felana request)
      };
      
     axios.post("http://18.212.203.228:5050" + "/users/registerUser", payload)
        .then((response) => {
          redirectToHome();
          console.log(response)
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              // successMessage: 'Registration successful. Redirecting to home page..',
            }));
            
            console.log(response)
            // props.showError(null);
          } else {
          // props.showError("Some error ocurred");
      }})
  .catch((error) => {
      console.log(error.response);
  });
 }


  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(state);
    // if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    // }
    // else {
      // props.showError('Passwords do not match');
    // }
  };

  const redirectToHome = () => {
  history.push('/');
  };
  // const redirectToLogin = () => {
  //   props.history.push('/login');
  // };

  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
      height="100%"
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box align="center" justifyContent="center" display="flex">
          <Heading display="flex" fontSize="4xl">Inscription <Twemoji display="flex" onlyEmojiClassName="twemoji" display="flex" text="👩🏻‍💻"/></Heading>
        </Box>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
          <FormControl id="email">
              <FormLabel>Prénom</FormLabel>
              <Input
                type="text"
                id="firstname"
                value={state.firstname}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Nom</FormLabel>
              <Input
                type="text"
                id="lastname"
                value={state.lastname}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Adresse e-mail</FormLabel>
              <Input
                type="email"
                id="email"
                value={state.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Mot de passe</FormLabel>
              <Input
                type="password"
                id="password"
                value={state.password}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Confirmez votre mot de passe</FormLabel>
              <Input
                type="password"
                id="confirmPassword"
                value={state.confirmPassword}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Link as={ReactLink} to='/login'>
                <Text 
                color="#0468ae">
                Déja un compte ? Connectez-vous
                </Text>
                </Link>
              </Stack>
              <Button
                color="#0468ae"
                onClick={handleSubmitClick}
              >
                Je m'inscris
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

/* <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
        {state.successMessage}
      </div>
      <div className="mt-2">
        <span>Already have an account? </span>
        <span className="loginText" onClick={() => redirectToLogin()}>Login here</span>
      </div>
    </div>
  );
} */

// export default withRouter(RegistrationForm);
