import React from 'react';
import { Link as ReactRouter } from 'react-router-dom';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import { Twemoji } from 'react-emoji-render';

import "./style.css";

import {
  Heading, Box, Badge, Button, Text, Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  useColorModeValue,
  StackDivider,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function PremiumJobs() {

  return (
  <>
  <VStack pt={5} pb={2} pl={10} pr={10} bg={useColorModeValue('gray.50', 'gray.800')} spacing={2}>
  <Accordion width="80%" allowToggle bg="#fcf5eb" >
  <AccordionItem _hover={{
              boxShadow: 'lg',
              borderLeftWidth: '2px',
              borderLeftColor: 'blue.500'}}>
  <AccordionButton>
  <Box display="flex" flex="1" textAlign="left">
  <Twemoji className="twemoji" text="⭐"/><Heading as="h2" size="sm">HELPER - REFERENT</Heading>
  </Box>
  <Badge fontSize="sm" ml="1" colorScheme="green">France</Badge>
  <AccordionIcon />
  </AccordionButton>
  <AccordionPanel>
  <Heading as="h3" size="sm" color="blue.500">O'clock</Heading>
  <p as="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia iusto aliquam quidem maxime ratione consequatur praesentium harum voluptate, culpa beatae temporibus, dolorum quasi in ipsa facilis, aspernatur obcaecati esse unde.</p>
  <Link href="https://lesinge.paris/fr"><Button rightIcon={<ArrowForwardIcon />}>Je postule</Button></Link>
  </AccordionPanel>
  {/* <p>{job.completed.toString()}</p> */}
  {/* </Link> */}
  </AccordionItem>
  </Accordion>
  </VStack>
  </>
  );
}

{/*
  
  <Link href={val.origineOffre.partenaires && val.origineOffre.partenaires[0].url ?  val.origineOffre.partenaires[0].url : val.origineOffre.urlOrigine} isExternal>
  
   Job.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  company: PropTypes.string,
  technology: PropTypes.string,
  locality: PropTypes.string,
  contract: PropTypes.string,
};
Job.defaultProps = {
  title: '',
  description: '',
  company: '',
  technology: '',
  locality: '',
  contract: '',
};*/}
