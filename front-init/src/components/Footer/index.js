import React from 'react'

import { Link as ReactLink } from 'react-router-dom';

import {
  Box,
  Container,
  Stack,
  Text,
  Icon,
  Link
} from '@chakra-ui/react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      bg='#282C34'
      // bg='#2568a8'
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
            
        <Link href="https://discord.com/invite/jR3f6Uwm" isExternal>
          <Icon as={FaDiscord} w={5} h={5} />
        </Link>   
            
        <Link href="https://twitter.com/react_jobs_fr" isExternal>
          <Icon as={FaTwitter} w={5} h={5} />
        </Link>

        </Stack>
      </Container>
    </Box>
  );
}
