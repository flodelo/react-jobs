import React,  { useState, useEffect } from 'react';
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
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';

export default function PremiumJobs({premiumJobs}) {
  // const [jobs, setJobs] = useState([]);
  
  // useEffect(() => {

  //   // fetch(BASE_URL +'/hello', {withCredentials: true})
  //   fetch('http://18.212.203.228:5050' + '/jobs')
    
  //     .then(data => {
  //       console.log("1er console log de data PremiumJobs",data);
  //       return data.json();
  //     })
  //     .then(data => {
  //       data = data.slice(0, 2)
  //       console.log("2eme console log de data PremiumJobs",data);
  //       setJobs(data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //   }, [])

// <Twemoji className="twemoji" text="⭐"/>

  return (
    <VStack p={1} bg={useColorModeValue('gray.50', 'gray.800')} spacing={4}>
      <Accordion width={useBreakpointValue({ base: "80%", md: "60%" })} allowToggle bg="#fcf5eb" >
          <AccordionItem  pt= "2" pb= "2"
              _hover={{
                        boxShadow: 'lg',
                        borderLeftWidth: '2px',
                        borderLeftColor: 'blue.500'}}
                      >
            <AccordionButton>
            <Twemoji className="twemoji" text="⭐"/>
            <Box flex="1" textAlign="left">
            <Heading as="h2" size={useBreakpointValue({ base: "xs", md: "sm" })}>{(premiumJobs.title).toUpperCase()}
            </Heading>
            </Box>
            <Badge size={useBreakpointValue({ base: "xs", md: "sm" })} ml="1" colorScheme="">{premiumJobs.locality}</Badge>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
            <Flex justifyContent="space-between">
            <Heading display="flex" as="h3" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">{premiumJobs.locality}</Heading>
            <Heading display="flex" as="h2" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">{premiumJobs.contract}</Heading>
            </Flex>
            <br />
            <Text fontSize={useBreakpointValue({ base: "sm", md: "md" })} as="p">{premiumJobs.description}
            </Text>
            <Text fontSize={useBreakpointValue({ base: "xs", md: "sm" })} fontWeight="700" as="p"> {premiumJobs.salary}</Text>
            <Flex justifyContent="flex-end">
            <Link fontSize={useBreakpointValue({ base: "sm", md: "md" })} href="https://oclock.io/team" isExternal><Button color="#0468ae" rightIcon={<ArrowForwardIcon />}>Je postule</Button></Link>
            </Flex>
            </AccordionPanel>
            {/* <p>{job.completed.toString()}</p> */}
            </AccordionItem>
            </Accordion>
      </VStack>
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
