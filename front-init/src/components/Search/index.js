// == Import React
import React from 'react';

import { useState, useEffect } from "react";

// == Imports NPM
import {
  Input, Button, VStack, StackDivider, Accordion, InputLeftElement, InputGroup, Text, useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Job from '../Search/Job';

export default function Search ({jobs}) {
  
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5050/jobs/pe")
  //     .then((response) => response.json())
  //     .then((json) => setJobs(json));
  // }, []);

  const handleSearchTerm = (e) => {
    setSearchTerm("");
    let value = e.target.value;
    value.length > 2 && setSearchTerm(e.target.value);
  };

  return (
    <>
      <VStack spacing="10px" justify="center" p={5} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Text>Recherchez une ville, une technologie, un type de contrat...</Text>
        <InputGroup maxWidth="500px">
        <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          onChange={handleSearchTerm}
          variant="outline"
          placeholder="Ex : Bordeaux, Redux, CDI"
          size="lg"
          bg="white"
        />
      </InputGroup>
      </VStack>
      <VStack p={10} bg={useColorModeValue('gray.50', 'gray.800')} spacing={4} divider={<StackDivider borderColor="gray.200" align="stretch" />}>
      <Accordion width="80%" allowToggle >
        {jobs
          .filter(val =>
            val.description.toLowerCase().includes(searchTerm.toLowerCase())
            || val.intitule.toLowerCase().includes(searchTerm.toLowerCase())
            || val.typeContrat.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((val) => {
            return (
              <Job key={val.id} val={val}
              />
            );
          })}
      </Accordion>
      </VStack>
    </>
  );
} 
  // return (
  // <>
  //    <HStack spacing="10px" justify="center" mr={10} ml={10} mb={5}>
  //     <Input
  //       variant="outline"
  //       display="flex"
  //       placeholder="Recherche par mots-clés..."
  //       w="500px"
  //       onChange={handleSearchTerm}
  //     />
  //     <div>
  //       {datas
  //         .filter((val) => {
  //           return val.intitule.toLowerCase().includes(searchTerm.toLowerCase());
  //         })
  //         .map((val) => {
  //           return (
  //             <>
  //             <div key={val.id}>
  //               {val.intitule}
  //               </div>
  //               </>
  //           );
  //         })}
  //         </div>
  //     {/*<Button color="blue.500">Chercher</Button>*/}
  //   </HStack>
  //   <Filters /> 
  // </>)
// }




/*
export default function Search() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);
  const handleSearchTerm = (e) => {
    setSearchTerm("");
    let value = e.target.value;
    value.length > 2 && setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <div>
        {datas
          .filter((val) => {
            return val.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((val) => {
            return (
              <div key={val.id}>
                {val.title}
              </div>
            );
          })}
      </div>
    </>
  );
} 
*/
