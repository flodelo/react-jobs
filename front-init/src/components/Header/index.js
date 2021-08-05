/* eslint-disable max-len */
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import { Link as ReactLink } from 'react-router-dom';

import {
  Flex, Spacer, Box, Heading, Button, IconButton, Menu, MenuButton, useBreakpointValue, Text, Link
} from '@chakra-ui/react';

import MenuBurger from './MenuBurger';
import Logo from './Logo';

const Header = ({isLoggedIn,setIsLoggedIn, isAdmin}) => {
  const history = useHistory();
  const responsiveSize = useBreakpointValue(['md', 'lg']);
  // Le hook useBreakpointValue répond également au redimensionnement de la fenêtre et renvoie la valeur appropriée pour la nouvelle taille de la fenêtre
 // Fonction permettant une redirection lors de l'event onClick sur un élément texte
  const isLoggedOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    history.push("/");
  }

  return (
    <Flex bg="gray.50">
      <Box boxSize="40">
        <Logo  size={responsiveSize}/>
      </Box>             
      <Spacer />
      <Box p={10}>
      {
        !isLoggedIn ? 
        <>
      <Link as={ReactLink} to='/register'
        >
          <Button
            display={{
              base: 'none',
              md: 'inline-block',
              lg: 'inline-block',
            }}
            size={responsiveSize}
            variant="solid"
            color="#0468ae"
            mr="2"
            mt="2"
          >
            Inscription
          </Button>
          </Link>
        
          <Link as={ReactLink} to='/login'
        >
          <Button
            display={{
              base: 'none',
              md: 'inline-block',
              lg: 'inline-block',
            }}
            size={responsiveSize}
            color="#0468ae"
            mr="2"
            mt="2"
          >
            Connexion
          </Button>
          </Link> </>:

        <Button
            display={{
              base: 'none',
              md: 'inline-block',
              lg: 'inline-block',
            }}
            onClick={isLoggedOut}
            size={responsiveSize}
            color="#0468ae"
            mr="2"
            mt="2"
          >
            Déconnexion
          </Button>
          
        }

        <Menu>
          {/* Creation du menu burger avec props */}
          <MenuBurger isAdmin={isAdmin}
          />
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
