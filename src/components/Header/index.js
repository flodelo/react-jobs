import React from 'react';
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";

const Header = () => (
    <Flex>
    <Box p="2">
      <Heading size="lg">React-jobs.fr</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button colorScheme="blue" mr="2">
        Sign Up
      </Button>
      <Button colorScheme="blue" variant="outline" mr="2">Log in</Button>
      <Button colorScheme="blue">Menu</Button>
    </Box>
  </Flex>
)

export default Header;
