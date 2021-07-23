// == Import React
import React from 'react';

// == Imports
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from '@chakra-ui/react';

const Filters = () => (
  <>
    <Accordion bg="gray.50"
    color="blue.500" 
    allowToggle 
    justifyContent="center" 
    width={{
            base: "75%",
            md: "75%",
            lg: "50%",
          }} 
          m="auto"
          maxW="500px">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center" justify="center">
              Recherche avancée
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} display="flex" alignItems="center" justifyContent="space-around" flexWrap="wrap">
          <Checkbox display="flex" m="1" defaultIsChecked>React native</Checkbox>
          <Checkbox display="flex" m="1" defaultIsChecked>Redux</Checkbox>
          <Checkbox display="flex" m="1" defaultIsChecked>Node JS</Checkbox>
          <Checkbox display="flex" m="1" defaultIsChecked>Remote</Checkbox>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

  </>
);

export default Filters;
