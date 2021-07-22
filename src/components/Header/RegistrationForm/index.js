import React, { useState } from 'react';

import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
// import { withRouter } from "react-router-dom";

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

export default function RegistrationForm(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
      };
      axios.post(`${API_BASE_URL}/user/register`, payload)
        .then((response) => {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage: 'Registration successful. Redirecting to home page..',
            }));
            localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
            redirectToHome();
            props.showError(null);
          }
          else {
            props.showError('Some error ocurred');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
      props.showError('Please enter valid username and password');
    }
  };
  const redirectToHome = () => {
    props.updateTitle('Home');
    props.history.push('/home');
  };
  const redirectToLogin = () => {
    props.updateTitle('Login');
    props.history.push('/login');
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(state.email);
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    }
    else {
      props.showError('Passwords do not match');
    }
  };
  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
      height="100%"
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Inscription 🐱‍💻</Heading>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
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
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >

                <Link href="/login" color="blue.500">Déja un compte ? Connectez-vous</Link>

              </Stack>
              <Button
                color="blue.500"
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
