import React from 'react';
import { Link as ReactRouter } from 'react-router-dom';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import {
  Heading, Box, Badge, Button, Text, Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Job({ val }) {

  // console.log(val.origineOffre.partenaires[0].url)

  return (
    <>
    {/*  <Link to={`/jobs/pe/${id}`} key={id}> */}
      {/* <Heading as="h2" size="md">{jobs.description}</Heading>
      <Heading as="h3" size="sm" color="blue.500">{jobs.company}</Heading>
      <span>{jobs.technology.map((tech) => (<Badge colorScheme="gray" mr="1" key={tech}>{tech}</Badge>))}</span>
      ligne de code pour utiliser la méthode .map avec des composants UI
      <p>{jobs.locality}</p>
  <p>{jobs.contract}</p> */}
  <AccordionItem  pt= "2" mb= "2"
    _hover={{
              boxShadow: 'lg',
              borderLeftWidth: '2px',
              borderLeftColor: 'blue.500'}}
             >
  <AccordionButton>
  <Box flex="1" textAlign="left">
  <Heading as="h2" size="sm">{(val.intitule).toUpperCase()}</Heading>
  </Box>
  <Badge fontSize="sm" ml="1" colorScheme="">{val.lieuTravail.libelle}</Badge>
  <AccordionIcon />
  </AccordionButton>
  <AccordionPanel>
  <Flex justifyContent="space-between">
  <Heading display="flex" as="h3" size="sm" color="blue.500">{val.entreprise.nom}</Heading>
  <Heading display="flex" as="h2" size="sm" color="blue.500">{val.typeContrat}</Heading>
  </Flex>
  <br />
  <p as="h3">{val.description}</p>
  <p as="h3">{val.dateCreation} </p>
  <Link href={val.origineOffre.partenaires && val.origineOffre.partenaires[0].url ?  val.origineOffre.partenaires[0].url : val.origineOffre.urlOrigine} isExternal><Button rightIcon={<ArrowForwardIcon />}>Je postule</Button></Link>
  </AccordionPanel>
  {/* <p>{job.completed.toString()}</p> */}
  {/* </Link> */}
  </AccordionItem>
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
