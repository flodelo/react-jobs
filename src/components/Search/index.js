// == Import React
import React from 'react';

// == Imports NPM
import PropTypes from 'prop-types';
import {
  Input, Button, HStack,
} from '@chakra-ui/react';

const Search = ({ prop1 }) => (

  <HStack spacing="10px">
    <Input
      variant="outline"
      placeholder="Recherche par mots-clés..."
    />
    <Button colorScheme="blue">Go</Button>
  </HStack>

);

Search.propTypes = {
  prop1: PropTypes.string,
};

Search.defaultProps = {
  prop1: '',
};

export default Search;
