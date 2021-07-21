// == Import React
import React from 'react';

// == Imports NPM
import {
  Input, Button, HStack,
} from '@chakra-ui/react';
import Filters from './Filters';

const Search = () => (
  <>
    <HStack spacing="10px" justify="center" mr={10} ml={10} mb={5}>
      <Input
        variant="outline"
        display="flex"
        placeholder="Recherche par mots-clés..."
        
        w="500px"
      />
      <Button color="blue.500">Chercher</Button>
    </HStack>
    <Filters />
  </>
);

export default Search;
