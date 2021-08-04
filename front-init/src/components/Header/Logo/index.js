import React from 'react'

import logo from "src/assets/Logo validé-Job Board.png"
import { Image, Box, Link } from "@chakra-ui/react"

import { Link as ReactLink } from 'react-router-dom';

export default function Logo() {
  return (
  <Box boxSize="11em" ml="4" mt="1">
    <Link href="/">
        <Image src={logo} alt="Logo React-jobs.fr" />
    </Link>
  </Box>
  )
}
