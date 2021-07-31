/* eslint-disable max-len */
import React from 'react';

import { Link as ReactLink } from 'react-router-dom';

import {
  Flex, Spacer, Box, Heading, Button, IconButton, Menu, MenuButton, useBreakpointValue, Text, Link
} from '@chakra-ui/react';

import MenuBurger from './MenuBurger';
import Logo from './Logo';

const Header = () => {
  const responsiveSize = useBreakpointValue(['md', 'lg']);
  // Le hook useBreakpointValue répond également au redimensionnement de la fenêtre et renvoie la valeur appropriée pour la nouvelle taille de la fenêtre

 const redirectHome = () => {
  window.location.href = "/";
 } 
 // Fonction permettant une redirection lors de l'event onClick sur un élément texte
  
  return (
    <Flex>
      <Box boxSize="40" onClick={redirectHome}>
        <Logo  size={responsiveSize}/>
      </Box>             
      <Spacer />
      <Box p={10}>
      
      <Link as={ReactLink} to='/register'
        >
          <Button
            display={{
              base: 'none',
              md: 'inline-block',
              lg: 'inline-block',
            }}
            size={responsiveSize}
            color="blue.500"
            variant="outline"
            mr="2"
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
            color="blue.500"
            mr="2"
          >
            Connexion
          </Button>
        </Link>
        <Menu>
          {/* Creation du menu burger avec props */}
          <MenuBurger
            size={responsiveSize}
          />
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
