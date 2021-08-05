import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

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
  Textarea,
} from '@chakra-ui/react';

export default function AdminForm({isAdmin}) {
  const history = useHistory();
  const [state, setState] = useState({
    title: '',
    technology: '',
    company: '',
    locality: '',
    contract: '',
    salary: '',
    description: '',
    user_id: isAdmin
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
        "title" : state.title,
        "technology" : state.technology,
        "company" : state.company,
        "locality" : state.locality,
        "contract" : state.contract,
        "salary" : state.salary,
        "description" : state.description,
        'user_id': localStorage.getItem('USER_ID'),
      };
      
     axios.post('http://18.212.203.228:5050/jobs/save', payload,
     {headers: {
       'Authorization':`Bearer ${localStorage.getItem('USER_TOKEN')}`,
      //  'user_id' : `Bearer ${localStorage.getItem('USER_ID')}`,
     }}
     )
        .then((response) => {
          redirectToHome();
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              // successMessage: 'Registration successful. Redirecting to home page..',
            }));
            // redirectToHome();
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
    console.log(history)
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
        <Stack align="center">
          <Heading fontSize="4xl">Ajouter une offre 🐱‍💻</Heading>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
          <FormControl id="title">
              <FormLabel>Titre de l'offre</FormLabel>
              <Input
                type="text"
                id="title"
                value={state.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="technology">
              <FormLabel>Technos</FormLabel>
              <Input
                type="text"
                id="technology"
                value={state.technology}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="company">
              <FormLabel>Entreprise</FormLabel>
              <Input
                type="text"
                id="company"
                value={state.company}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="locality">
              <FormLabel>Localisation</FormLabel>
              <Input
                type="text"
                id="locality"
                value={state.locality}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="contract">
              <FormLabel>Contrat</FormLabel>
              <Input
                type="text"
                id="contract"
                value={state.contract}
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
           
            <FormControl id="salary">
              <FormLabel>Salaire</FormLabel>
              <Input
                type="text"
                id="salary"
                value={state.salary}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="description">
              <FormLabel>Description de l'offre</FormLabel>
              <Textarea type="text"
                id="description"
                value={state.description}
                onChange={handleChange}
              />
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
                Publier
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
