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
  <div>
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="center">
              Recherche avancée
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultIsChecked>React native</Checkbox>
          <Checkbox defaultIsChecked>Redux</Checkbox>
          <Checkbox defaultIsChecked>Node JS</Checkbox>
          <Checkbox defaultIsChecked>Remote</Checkbox>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

  </div>
);

export default Filters;
