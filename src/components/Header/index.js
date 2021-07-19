import React from 'react';
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";

const Header = () => (
    <Flex>
    <Box p="2">
      <Heading size="lg"><span role="img" aria-label="atom emoji">⚛</span> React-jobs.fr</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button color="blue.500" variant="outline" mr="2">
        Sign Up
      </Button>
      <Button color="blue.500" mr="2" >Log in</Button>
      <Button color="black" variant="ghost">Menu</Button>
    </Box>
  </Flex>
)

export default Header;
