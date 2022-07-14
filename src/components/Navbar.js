import { AppBar, Container, Box, Button, Toolbar } from '@mui/material'
import React from 'react'


function Navbar() {
  return (
    <AppBar component="nav" sx={{ background: '#fff' }} >
      <Container maxWidth={"lg"}>
        <Box xs={{ flexGrow: 1 }}>
          <Toolbar>
            <Box sx={{ display: { flexGrow: 1 } }}>
            <a href="https://virtuallytesting.com/"><img src='/assets/logo-small.png' alt='logo' height={40} width={40} /></a>
            </Box>

            <Box sx={{ textAlign: 'right' }}>
              <Button href="https://virtuallytesting.com/">Home</Button>
              <Button href="https://virtuallytesting.com/about.html">About</Button>
              <Button href="https://virtuallytesting.on.spiceworks.com/portalhttps://virtuallytesting.on.spiceworks.com/portal">Contact</Button>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>

  )
}

export default Navbar