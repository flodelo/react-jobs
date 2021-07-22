/* eslint-disable max-len */
import React from 'react';

import {
  Flex, Spacer, Box, Link, Heading, Button, IconButton, Menu, MenuButton, useBreakpointValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const responsiveSize = useBreakpointValue(['md', 'lg']);
  // Le hook useBreakpointValue répond également au redimensionnement de la fenêtre et renvoie la valeur appropriée pour la nouvelle taille de la fenêtre

 const redirectHome = () => {
  window.location.href = "/";
 } 
 // Fonction permettant une redirection lors de l'event onClick sur un élément texte
  
  return (
    <Flex p={10}>
      <Box p="2">
        <Heading onClick={redirectHome} size={responsiveSize}><span role="img" aria-label="atom emoji">⚛</span> React-jobs.fr</Heading>
      </Box>
      <Spacer />
      <Box>

        <Link
          href="/inscription"
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
        <Link
          href="/connexion"
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
          <MenuButton
            size={responsiveSize}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            color="blue.500"
          />
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
