import React from 'react';

import {
  Heading, Box, Badge, Button, Link
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Job({ job }) {
  return (
    <Box bg="white" 
    p={5} 
    shadow="md" 
    borderWidth="1px" 
    w="90%" 
    maxW="800px"
    _hover={{
      boxShadow: 'lg',
      borderLeftWidth: '2px',
      borderLeftColor: 'blue.500',
    }}
    >
      {/* <Heading as="h2" size="md">{jobs.description}</Heading>
      <Heading as="h3" size="sm" color="blue.500">{jobs.company}</Heading>
      <span>{jobs.technology.map((tech) => (<Badge colorScheme="gray" mr="1" key={tech}>{tech}</Badge>))}</span>
      ligne de code pour utiliser la méthode .map avec des composants UI
      <p>{jobs.locality}</p>
  <p>{jobs.contract}</p> */}
  <Heading as="h2" size="md">{job.intitule}</Heading>
  {/* <Heading as="h3" size="sm" color="blue.500">{job.id}</Heading>*/}
  <Heading as="h3" size="sm" color="blue.500">{job.entreprise.nom}</Heading>
  <p>{job.description}</p>
  <Button color="blue.500">
  <Link href={job.origineOffre.urlOrigine} isExternal>Je postule</Link>
              </Button>
  </Box>
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
