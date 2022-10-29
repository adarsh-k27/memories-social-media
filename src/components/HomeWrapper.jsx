import React from 'react'
import { Container } from '@mui/material/'
function HomeWrapper ({ children }) {
  return <Container maxWidth='xl'>{children}</Container>
}

export default HomeWrapper
