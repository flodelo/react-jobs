import React from 'react';

import Job from './Job';

import {
  ListItem, UnorderedList,
} from '@chakra-ui/react';


export default function JobsList() {
  return (
    <UnorderedList justify="center">
      <ListItem><Job /></ListItem>
      <ListItem><Job /></ListItem>
      <ListItem><Job /></ListItem>
      <ListItem><Job /></ListItem>
    </UnorderedList>
  );
}
