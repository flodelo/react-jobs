import React from 'react';

import {
  Heading, Box, Badge
} from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function Job({ job }) {
  return (
    <Box bg="white" p={5} shadow="md" borderWidth="1px" w="100%">
      <Heading as="h2" size="md">{job.description}</Heading>
      <Heading as="h3" size="sm" color="blue.500">{job.company}</Heading>
      <span>{job.technology.map((tech) => (<Badge colorScheme="gray" mr="1" key={tech}>{tech}</Badge>))}</span>
      {/* ligne de code pour utiliser la méthode .map avec des composants UI */}
      <p>{job.locality}</p>
      <p>{job.contract}</p>
    </Box>
  );
}

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
};
