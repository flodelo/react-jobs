import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import api from 'src/api';
// import JobsList from '../JobsList';

export default function JobDetails({}) {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/todos/job/${id}`)
    .then(data => {
      console.log(data);
      return data.json();
    })
    .then(data => {
      
      console.log(data);
      setJob(data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(data => {
  //     console.log(data);
  //     return data.json();
  //   })

  // const fetchJobData = async () => {
  //   try {
  //     const response = await api.get (`/job/${job.id}`);
  //     setJob(response.data);
  //   }
  //   catch (e) {
  //     alert(e.message);
  //   }
  // };

  // Récupération des données
  // useEffect(() => {
  //   fetchJobData();
  // }, [job.id]);
  return (
    <div>
      <h1>{job.title}</h1>
      <h2>{job.id}</h2>+
    </div>
  )
}
