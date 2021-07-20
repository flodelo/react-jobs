// == Import React
import React from 'react';

// == Imports NPM
import {
  Input, Button, HStack,
} from '@chakra-ui/react';
import Filters from './Filters';

const Search = () => (
  <>
    <HStack spacing="10px" justify="center">
      <Input
        variant="outline"
        placeholder="Recherche par mots-clés..."
        m="5"
        w="700px"
      />
      <Button color="blue.500">Go</Button>
    </HStack>
    <Filters />
  </>
);

export default Search;
