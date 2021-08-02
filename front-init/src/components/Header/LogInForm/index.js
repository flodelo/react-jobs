import React, { useState } from 'react';
// import { withRouter } from "react-router-dom";

import axios from 'axios';

import { Twemoji } from 'react-emoji-render';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function LogInForm(props) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [state, setState] = useState({
    email: '',
    password: '',
    // successMessage: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(state);
    const payload = {
      "email" : state.email,
      "password" : state.password,
    };
    axios.post("http://localhost:5050/users/loginUser", payload)
     .then((response) => {
        if (response.status === 200) {
          const { user, token } = response.data
          
          if (user.token) {
            setIsLogged(true)
          }

          if (user.role === "admin") {
            setIsAdmin(true)
          }

          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          console.log(response)
          setState((prevState) => ({
            ...prevState,
            // successMessage: 'Connexion réussi.',
          }));


          if (isAdmin) {
          redirectToDashboard() }

          else { 
          redirectToHome() }

          localStorage.setItem("USER_TOKEN", response.data.token);
          
          redirectToHome();

          // props.showError(null);
        }
        else if (response.code === 204) {
          // props.showError("Le nom d'utilisateur et le mot de passe ne correspondent pas");
        }
        else {
          // props.showError("Le nom d'utilisateur n'existe pas");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

 /* .then((response)) => {
   const user = response.user
   if (user.role.includes("Admin"))
   redirectToDashboard() }

  1. si le rôle de l'user est "Admin", rediriger vers "/admin" avec la vue 
  2. redirection vers admin via react-router
  3. envoi d'une offre via formulaire

  A voir : 
  1. comment garder le token et aussi comment réaliser un logout.
  2. S'assurer que la route n'est pas accessible en tapant l'url avec /admin
 } 
 */


  const redirectToHome = (props) => {
    // props.updateTitle('Accueil');
    console.log(props)
    props.history.push('/');
  };


  return (
    <Flex
      align="center"
      justify="center"
      height="100%"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Box justifyContent="center" display="flex" >
          <Heading display="flex" fontSize="4xl">Connexion <Twemoji ClassName="twemoji" display="flex" text="✌️"/></Heading>
        </Box>
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
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
                <Link
                  href="/register"
                  color="blue.500"
                >Pas encore de compte ? Cliquez ici pour vous inscrire
                </Link>
              </Stack>
              <Button
                color="blue.500"
                onClick={handleSubmitClick}
              >
                Je me connecte
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
