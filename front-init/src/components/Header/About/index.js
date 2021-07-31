import React from 'react';

import { Avatar, Box, Stack, Text, useColorModeValue, Flex } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex p={10}>
     {/* <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
    </Stack> */}
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'} mb={50}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Florian Delobelle</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Product Owner
        </Text>
      </Box>
    </Stack>

    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Caroline Wiese</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Lead dev Back
        </Text>
      </Box>
    </Stack>

    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Florian Brun-Buisson</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Lead dev Front
        </Text>
      </Box>
    </Stack>

    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Felana Letrange</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Git Master
        </Text>
      </Box>
    </Stack>

    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor dolor sit amet maximus vehicula. In sapien magna, facilisis at gravida sit amet, sagittis nec enim. Fusce sit amet dolor ac enim convallis bibendum. Aenean pulvinar cursus nunc.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          alt={'Jenny Wilson'}
          mb={2}
        />

        <Text fontWeight={600}>Alexandre Chochois</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Scrum Master
        </Text>
      </Box>
    </Stack>
    </Flex>
  );
}
