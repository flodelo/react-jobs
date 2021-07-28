import React from 'react';
import { Link } from 'react-router-dom';

import {
  Heading, Box, Badge, Button, Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Job({ id, intitule, description, typeContrat, entreprise }) {
  return (
    <Accordion width="80%" allowToggle _hover={{
      boxShadow: 'lg',
      borderLeftWidth: '2px',
      borderLeftColor: 'blue.500'}}>
    {/*  <Link to={`/jobs/pe/${id}`} key={id}> */}
      {/* <Heading as="h2" size="md">{jobs.description}</Heading>
      <Heading as="h3" size="sm" color="blue.500">{jobs.company}</Heading>
      <span>{jobs.technology.map((tech) => (<Badge colorScheme="gray" mr="1" key={tech}>{tech}</Badge>))}</span>
      ligne de code pour utiliser la méthode .map avec des composants UI
      <p>{jobs.locality}</p>
  <p>{jobs.contract}</p> */}
  <AccordionItem>
  <AccordionButton>
  <Box flex="1" textAlign="left">
  <Heading as="h2" size="md">{intitule}</Heading>
  </Box>
  <Badge fontSize="1.25em" ml="1" colorScheme="green">{typeContrat}</Badge>
  <AccordionIcon />
  </AccordionButton>
  <AccordionPanel>
  <Heading as="h3" size="sm" color="blue.500">{entreprise}</Heading>
  <p as="h3">{description}</p>
  <Button>Test</Button>
  </AccordionPanel>
  {/* <p>{job.completed.toString()}</p> */}
  {/* </Link> */}
  </AccordionItem>
  
  </Accordion>
  );
}

{/* Job.propTypes = {
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
