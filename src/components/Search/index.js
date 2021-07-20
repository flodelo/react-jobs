// == Import React
import React from 'react';

// == Imports NPM
import {
  Input, Button, HStack,
} from '@chakra-ui/react';
import Filters from './Filters';

const Search = () => (
  <div>
    <HStack spacing="10px">
      <Input
        variant="outline"
        placeholder="Recherche par mots-clés..."
        m="5"
      />
      <Button color="blue.500">Go</Button>
    </HStack>
    <Filters />
  </div>
);

export default Search;
