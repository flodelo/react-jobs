import React from 'react';

import { 
  HamburgerIcon, 
  AddIcon,
  QuestionIcon,
  EmailIcon,
  ChatIcon,
  AtSignIcon,
 } from '@chakra-ui/icons'

import { 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem,
  IconButton, 
  Link,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';

import { FaDiscord, FaTwitter } from 'react-icons/fa';


export default function MenuBurger({isAdmin}) {

  const responsiveSize = useBreakpointValue(['md', 'lg']);

  return (
      <Menu>
        <MenuButton
          size={responsiveSize}
          mt="2"
          color="blue.500"
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
        />
        <MenuList>
        {isAdmin && <Link as={ReactLink} to='/login/adminform'>
        <MenuItem icon={<AddIcon />}>
            Déposer une annonce
          </MenuItem>
          </Link>}

        <Link as={ReactLink} to='/about'>
          <MenuItem icon={<QuestionIcon/>}>
            A propos
          </MenuItem>
          </Link>

        <Link as={ReactLink} to='/contact'>
          <MenuItem icon={<EmailIcon/>}>
            Nous contacter
          </MenuItem>
          </Link>

          <Link href="https://discord.com/invite/jR3f6Uwm" isExternal>
            <MenuItem>
            <Icon as={FaDiscord} mr={2.5}/>
              Discord
            </MenuItem>
          </Link>

          <Link href="https://twitter.com/react_jobs_fr" isExternal>
            <MenuItem>
              <Icon as={FaTwitter} mr={2.5}/>
              Twitter 
            </MenuItem>
          </Link>

        </MenuList>
</Menu>

  )
}



