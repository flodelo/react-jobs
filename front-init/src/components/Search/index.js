// == Import React
import React from 'react';

import { useState } from "react";

// == Imports NPM
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Input, Button, VStack, StackDivider, Accordion, InputLeftElement, InputGroup, Text, useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Job from './Job';
import PremiumJobs from './PremiumJobs';


export default function Search ({jobs}) {

  const perPage = 5;
  const [allJobs, setAllJobs] = useState(jobs.slice(0, perPage));
  const [hasMore, setHasMore] = useState(false);
  

export default function Search({jobs}) {
  const [premiumJobs, setPremiumJobs] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {


  const [lastPosition, setLastPosition] = useState(perPage);

  // useEffect(() => {
  //   fetch("http://localhost:5050/jobs/pe")
  //     .then((response) => response.json())
  //     .then((json) => setJobs(json));
  // }, []);

    // fetch(BASE_URL +'/hello', {withCredentials: true})
    fetch('http://18.212.203.228:5050' + '/jobs')
    
      .then(data => {
        console.log("1er console log de data PremiumJobs",data);
        return data.json();
      })
      .then(data => {
        data = data.slice(0, 2)
        console.log("2eme console log de data PremiumJobs",data);
        setPremiumJobs(data)
      })
      .catch(error => {
        console.log(error)
      })
    }, [])

    const handleSearchTerm = (e) => {
      setSearchTerm("");
      let value = e.target.value;
      value.length > 2 && setSearchTerm(e.target.value);
    };



  const fetchMoreData = () => {
    setHasMore(true)
        setAllJobs((prev) => [...prev, ...jobs.slice(lastPosition, lastPosition + perPage)]);

    setLastPosition(lastPosition + perPage);
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
          boxShadow="rgb(0 0 0 / 5%) 0 10px 15px"
          type="text"
          onChange={handleSearchTerm}
          variant="outline"
          placeholder="Ex : Bordeaux, Redux, CDI"
          size="lg"
          bg="white"
        />
      </InputGroup>
      </VStack>

      <PremiumJobs/>
      <InfiniteScroll
          dataLength={allJobs}
          next={fetchMoreData}
          hasMore={setHasMore}
        >

      <VStack pt={5} pb={2} pl={10} pr={10} bg={useColorModeValue('gray.50', 'gray.800')} spacing={2}>
      <Accordion width="80%" allowToggle bg="#fcf5eb" >
      {premiumJobs.map((val) => {
            return (<PremiumJobs premiumJobs={val} key={val.id} />
      )})}
      </Accordion>
      </VStack>

      <VStack p={10} bg={useColorModeValue('gray.50', 'gray.800')} spacing={4} divider={<StackDivider borderColor="gray.200" align="stretch" />}>
      <Accordion width="80%" allowToggle >
        {allJobs
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
      </InfiniteScroll>
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
