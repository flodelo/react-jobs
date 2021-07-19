import React from 'react';
import { Flex, Spacer, Box, Heading, Button, useBreakpointValue } from "@chakra-ui/react";

const Header = () => {

  const buttonSize = useBreakpointValue(['xs', 'md', 'lg']);

  return(
    <Flex>
    <Box p="2">
      <Heading size="xl"><span role="img" aria-label="atom emoji">⚛</span> React-jobs.fr</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button size={buttonSize} color="blue.500" variant="outline" mr="2">
        Sign Up
      </Button>
      <Button size={buttonSize} color="blue.500" mr="2" >Log in</Button>
      <Button size={buttonSize} color="black" variant="ghost">Menu</Button>
    </Box>
  </Flex>
)}

export default Header;
