import React from 'react'

import {
  Box,
  Container,
  Stack,
  Text,
  Icon
} from '@chakra-ui/react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      bg='#282C34'
      color='white'
      height="100%"
      >
      <Container
        as={Stack}
        p={10}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>React-jobs.fr © 2021 CFAFF. Tous droits réservés</Text>
        <Stack direction={'row'} spacing={6}>
            <Icon as={FaDiscord} w={5} h={5} />
            <Icon as={FaTwitter} w={5} h={5} />
        </Stack>
      </Container>
    </Box>
  );
}
