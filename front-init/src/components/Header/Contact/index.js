import React, { useState } from 'react';

import axios from 'axios';
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

import { Textarea } from "@chakra-ui/react"

import { EmailIcon } from '@chakra-ui/icons'

export default function Contact(props) {

  const [state, setState] = useState({
    name: '',
    firstname: '',
    phone: '',
    mail: '',
    ourrequest: '',
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
        "name" : state.name,
        "firstname" : state.firstname,
        "phone" : state.phone,
        "mail" : state.mail,
        "ourrequest" : state.ourrequest,
      };
      
     axios.post('http://localhost:5050/jobs/save', payload)
        .then((response) => {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              // successMessage: 'Registration successful. Redirecting to home page..',
            }));
            redirectToHome();
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
    props.history.push('/');
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
        <Stack align="center">
          <Heading fontSize="4xl" icon={EmailIcon}>Nous contacter </Heading>
          
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>Nom</FormLabel>
              <Input
                type="text"
                id="name"
                value={state.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="firstname">
              <FormLabel>Prénom</FormLabel>
              <Input
                type="text"
                id="firstname"
                value={state.firstname}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="phone">
              <FormLabel>Numéro de téléphone</FormLabel>
              <Input
                type="number"
                id="phone"
                value={state.phone}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="mail">
              <FormLabel>Adresse mail</FormLabel>
              <Input
                type="text"
                id="mail"
                value={state.mail}
                onChange={handleChange}
              />
            </FormControl>


            {/* <RadioGroup onChange={handleChange} value={state.contract}>
              <Stack direction="row">
                <Radio value={state.contract}>CDI</Radio>
                <Radio value={state.contract}>CDD</Radio>
                <Radio value={state.contract}>Freelance</Radio>
                <Radio value={state.contract}>Alternance</Radio>
                <Radio value={state.contract}>Stage</Radio>
              </Stack>
            </RadioGroup> */}
           
            <FormControl id="ourrequest">
              <FormLabel>Votre demande</FormLabel>
              <Textarea type="text"
                id="ourrequest"
                value={state.ourrequest}
                onChange={handleChange}/>
          </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align="start"
                justify="space-between"
              >
              </Stack>
              <Button
                color="blue.500"
                onClick={handleSubmitClick}
              >
                Envoyer
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
