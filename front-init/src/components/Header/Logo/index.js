import React from 'react'

import logo from "src/assets/Logo validé-Job Board.png"
import { Image, Box } from "@chakra-ui/react"

export default function Logo() {
  return (
  <Box boxSize="11em" ml="4" mt="1">
    <Image src={logo} alt="Logo React-jobs.fr" />
  </Box>
  )
}
