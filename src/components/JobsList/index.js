import React, { useState, useEffect } from 'react';

import {
  ListItem, UnorderedList,
} from '@chakra-ui/react';

import Job from './Job';

import data from '../../data/jobs.json';


export default function JobsList() {

const [jobs, setJobs] = useState([]);

useEffect(() => {
    setJobs(data);
}, []);

console.log(jobs);

return (
    <UnorderedList justify="center">
      <ListItem>{jobs.map((job) => <Job job={job} key={job.id} />)}</ListItem>
    </UnorderedList>
  );
}
