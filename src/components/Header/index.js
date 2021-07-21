/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Flex, Spacer, Box, Heading, Button, IconButton, Menu, MenuButton, useBreakpointValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const responsiveSize = useBreakpointValue(['md', 'lg']);
  // Le hook useBreakpointValue répond également au redimensionnement de la fenêtre et renvoie la valeur appropriée pour la nouvelle taille de la fenêtre

  return (
    <Flex p={10}>
      <Box p="2">
        <Heading onclick="location.href='/'" size={responsiveSize}><span role="img" aria-label="atom emoji">⚛</span> React-jobs.fr</Heading>
      </Box>
      <Spacer />
      <Box>

        <NavLink
          to="/inscription"
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
        </NavLink>
        <NavLink
          to="/connexion"
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
        </NavLink>
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
