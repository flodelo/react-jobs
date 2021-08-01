import React from 'react';

import { Twemoji } from 'react-emoji-render';

import "./style.css";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,} from '@chakra-ui/react';

export default function TaglineBlock() {

  return (
    <Flex
      position="relative"
      w="100%"
      h="15em"
      background="linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(https://images.pexels.com/photos/4458418/pexels-photo-4458418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)"
      backgroundSize={'cover'}
      backgroundPosition="75% 35%"
      mb="1em"
      >
      <VStack
      position="absolute"
      bottom="5"
      w="100%"
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}>
        <Stack maxW={'4xl'} align={'flex-start'} spacing={2}>
          <Text
            textShadow="0.25px 0.25px 10px #000000"
            color={'white'}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Les hooks n'ont plus de secret pour vous ?
          </Text>
          <Stack direction={'row'} display="flex">
          <Text display="flex" flexWrap="wrap"
            textShadow="0.25px 0.25px 10px #000000"
            color={'white'}
            fontWeight={300}
            lineHeight={1}
            mr={4}
            fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>Consultez les 50 dernières offres React en France 
            <Twemoji className="twemoji" text="🇫🇷"/> 
          </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
