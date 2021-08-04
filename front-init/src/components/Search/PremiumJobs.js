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
          <AccordionItem  pt= "2" mb= "2"
              _hover={{
                        boxShadow: 'lg',
                        borderLeftWidth: '2px',
                        borderLeftColor: 'blue.500'}}
                      >
            <AccordionButton>
            <Box flex="1" textAlign="left">
            <Heading as="h2" size={useBreakpointValue({ base: "xs", md: "sm" })}> {premiumJobs.title} FORMATEUR-DEVELOPPEUR REACT H/F
            </Heading>
            </Box>
            <Badge size={useBreakpointValue({ base: "xs", md: "sm" })} ml="1" colorScheme="">TELETRAVAIL</Badge>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
            <Flex justifyContent="space-between">
            <Heading display="flex" as="h3" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">O'clock</Heading>
            <Heading display="flex" as="h2" fontSize={useBreakpointValue({ base: "xs", md: "sm" })} color="blue.500">CDI</Heading>
            </Flex>
            <br />
            <Text fontSize={useBreakpointValue({ base: "sm", md: "md" })} as="p">Notre méthode étant centrée sur l’humain, l’équipe pédagogique est la pierre angulaire de l’école. Tous ses membres doivent s’armer de patience et d’empathie, mais aussi de méthode, pour aider nos étudiants à découvrir le métier de développeur.
            Chaque matin, les formateurs accueillent les étudiants au sein de la classe virtuelle du Cockpit, notre plateforme pédagogique. Les cours commencent à 9h et se terminent à 15h avec une heure de pause à midi, on n’est pas des tortionnaires. Après les cours, les formateurs donnent le challenge à la classe, et restent dans les parages pour aider chaque étudiant à s’attaquer au défi de la journée.
            </Text>
            <Text fontSize={useBreakpointValue({ base: "xs", md: "sm" })} fontWeight="700" as="p">Publié le : DATE</Text>
            <Link fontSize={useBreakpointValue({ base: "sm", md: "md" })} href="https://oclock.io/team" isExternal><Button rightIcon={<ArrowForwardIcon />}>Je postule</Button></Link>
            </AccordionPanel>
            {/* <p>{job.completed.toString()}</p> */}
            </AccordionItem>
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
