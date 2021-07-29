import React, { useState, useEffect } from 'react';

import {
  VStack, StackDivider,
} from '@chakra-ui/react';

import Job from './Job';

// import data from '../../data/jobs.json';

export default function JobsList({ jobs }) {
  /* const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs); */

  return (
    <VStack bg="gray.50" spacing={4} divider={<StackDivider borderColor="gray.200" align="stretch" />}>
      {jobs.map((job) => <Job job={job} key={job.id} />)}
    </VStack>
  );
}
