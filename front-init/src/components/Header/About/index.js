import React from 'react';

import { Link as ReactLink } from 'react-router-dom';

import { Heading, Link, Avatar, Box, Stack, Text, useColorModeValue, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function About() {
  return (
    <>
    <Heading align={'center'} as="h1" bg={useColorModeValue('gray.50', 'gray.800')} pt="1em">A propos</Heading>
    <Flex p={5} flexWrap="wrap" justifyContent="space-around" bg={useColorModeValue('gray.50', 'gray.800')} >
    <Flex spacing="24px" d="flex" flexWrap="wrap">
      <Box 
      m="0.5em"
      w="100%"
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={4}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'left'}>
      <Text
      fontWeight={700}
      fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })}
        textAlign={'left'}>
        React... ton framework frontend de coeur ?
      </Text>
      <Text
      fontWeight={500}
      fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })}
        textAlign={'left'}>
        React-jobs.fr est la source #1 pour trouver ta prochaine mission React qui te correspond. Nous sélectionnons les offres les plus pertinentes en France pour te faciliter la vie.
      </Text>
      <Text
      fontWeight={700}
      fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
        textAlign={'left'}
        mt="1em">
        #Entraide #Communauté #Passion
      </Text>
      <Text
      mt="1em"
      fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
        textAlign={'left'}
        maxW={'3xl'}>
        Le projet a été créé par 5 développeurs formés par <Link href="https://oclock.io/" isExternal>O'clock<ExternalLinkIcon mx="5px" /></Link>
      </Text>
    </Box>
    <Box 
      w="0.5em"
      w="100%"
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={8}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      background="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?cs=srgb&dl=pexels-antonio-batini%C4%87-4164418.jpg&fm=jpg)"
      backgroundSize={'cover'}
      borderRadius="5px">
      <Text
        textAlign={'center'}
        maxW={'3xl'}
        color="white"
        textShadow="1px 1px 20px #000000"
        fontWeight={700}
        fontSize={useBreakpointValue({ base: 'lg', md: 'xl' })}>
        Bon à savoir : React est le framework le plus recherché dans le monde : 
        59% des recruteurs tech sont à l'affût de développeurs connaissant React. 
        Malheureusement, seuls 27,6% des programmeurs disent savoir l'utiliser.
        </Text><Link color="white" href="https://www.codingame.com/work/codingame-developer-survey-2021/?utm_source=press&utm_medium=referral&utm_campaign=developer-survey-2021&utm_content=b2b" isExternal>(Source : Codingame.com - 2021)<ExternalLinkIcon mx="5px"/></Link>
    </Box>
    </Flex>
    </Flex>
<Heading align={'center'} as="h2" bg={useColorModeValue('gray.50', 'gray.800')} pt="1em">Notre équipe</Heading>
    <Flex p={1} wrap="wrap" justifyContent="space-around" bg={useColorModeValue('gray.50', 'gray.800')} >
    <Stack
      m="0.5em"
      w="300px"
      bg={useColorModeValue('gray.50', 'gray.800')}
      _hover={{
        boxShadow: 'lg',
      }}
      py={8}
      px={8}
      spacing={{ base: 6, md: 8 }}
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

        <Link href="https://www.linkedin.com/in/carowiese?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlRfhnLi6QDaG1yAqX4MFGg%3D%3D" isExternal>
        <Text fontWeight={600}>Caroline Wiese</Text>
        </Link>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Lead dev Back
        </Text>
      </Box>
    </Stack>
    <Stack
    m="0.5em"
     w="300px"
      bg={useColorModeValue('gray.50', 'gray.800')}
      _hover={{
        boxShadow: 'lg',
      }}
      py={8}
      px={8}
      spacing={{ base: 6, md: 8 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        37 ans, domiciliée en Dordogne, ex-Biologiste et anciennement Attachée de Recherche clinique, maman fière de deux petites filles et folle de SQL !
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://media-exp1.licdn.com/dms/image/C4D03AQHiB8eXPFjsBA/profile-displayphoto-shrink_800_800/0/1613555923540?e=1633564800&v=beta&t=752IJtCMhi3M3mSSzcWwL-q2RRj4nY4g0so7NiK2rpk'
          }
          alt={'Caro Wiese'}
          mb={2}
        />

        <Text fontWeight={600}>Florian Delobelle</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
        Product Owner et dev Front
        </Text>
      </Box>
    </Stack>

    <Stack
    m="0.5em"
      w="300px"
      bg={useColorModeValue('gray.50', 'gray.800')}
      _hover={{
        boxShadow: 'lg',
      }}
      py={8}
      px={8}
      spacing={{ base: 6, md: 8 }}
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
    m="0.5em"
      w="300px"
      bg={useColorModeValue('gray.50', 'gray.800')}
      _hover={{
        boxShadow: 'lg',
      }}
      py={8}
      px={8}
      spacing={{ base: 6, md: 8 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
       39 ans. Développeur Web Backend. Je vis en Nouvelle-Aquitaine, du coté de Poitiers.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://media-exp1.licdn.com/dms/image/D4D35AQFxbTv7Dz7TqA/profile-framedphoto-shrink_800_800/0/1627143503035?e=1628244000&v=beta&t=uVTKlIW-p4x6EkLtMlWRLo-JZPlNM9_cDC-owuf7EKw'
          }
          alt={'Felana Letrange'}
          mb={2}
        />

        <Link href="https://www.linkedin.com/in/felana-letrange/" isExternal>
          <Text fontWeight={600}>Felana Letrange</Text>
        </Link>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Git Master et dev Back
        </Text>
      </Box>
    </Stack>

    <Stack
    m="0.5em"
      w="300px"
      bg={useColorModeValue('gray.50', 'gray.800')}
      _hover={{
        boxShadow: 'lg',
      }}
      py={8}
      px={8}
      spacing={{ base: 6, md: 8 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'm', md: 'm' }}
        textAlign={'center'}
        maxW={'3xl'}>
        34 ans, domicilié à Boulogne-sur-Mer (Pas-de-Calais, 62), ex-journaliste sportif en quête de reconversion.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://media-exp1.licdn.com/dms/image/C4D03AQFN7JMdd6BsjQ/profile-displayphoto-shrink_400_400/0/1550840608493?e=1633564800&v=beta&t=2HroTWMk7Vctvo6WtjtUYtvRGqfL6jKzLjZ7Kea9KV8'
          }
          alt={'Alexandre Chochois'}
          mb={2}
        />
        <Link href="https://www.linkedin.com/in/alexandre-chochois" isExternal>
        <Text fontWeight={600}>Alexandre Chochois</Text> </Link>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Scrum Master et dev Front
        </Text>
      </Box>
    </Stack>
    </Flex>
    </>
  );
}
