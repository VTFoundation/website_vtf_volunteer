import { AppBar, Container, Box, Button, Toolbar } from '@mui/material'
import React from 'react'


function Navbar() {
  return (
    <AppBar component="nav" sx={{ background: '#fff' }} >
      <Container maxWidth={"lg"}>
        <Box xs={{ flexGrow: 1 }}>
          <Toolbar>
            <Box sx={{ display: { flexGrow: 1 } }}>
              <img src='/assets/logo-small.png' alt='logo' height={40} width={40} />
            </Box>

            <Box sx={{ textAlign: 'right' }}>
              <Button>Home</Button>
              <Button>About</Button>
              <Button>Contact</Button>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>

  )
}

export default Navbar