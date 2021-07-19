import React from 'react';
import { Flex, Spacer, Box, Heading, Button, useBreakpointValue } from "@chakra-ui/react";

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
      <Button size={responsiveSize} color="black" variant="ghost">Menu</Button>
    </Box>
  </Flex>
)}

export default Header;
