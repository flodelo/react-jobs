import React from 'react';
import { Flex, Spacer, Box, Heading, Button, IconButton, Menu, MenuButton, useBreakpointValue } from "@chakra-ui/react";

import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {

  const responsiveSize = useBreakpointValue(['xs', 'md', 'lg']);
  // Le hook useBreakpointValue répond également au redimensionnement de la fenêtre et renvoie la valeur appropriée pour la nouvelle taille de la fenêtre

  return(
    <Flex>
    <Box p="2">
      <Heading size={responsiveSize}><span role="img" aria-label="atom emoji">⚛</span> React-jobs.fr</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button size={responsiveSize} color="blue.500" variant="outline" mr="2">
        Sign Up
      </Button>
      <Button size={responsiveSize} color="blue.500" mr="2" >Log in</Button>
      <Menu>
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
)}

export default Header;
