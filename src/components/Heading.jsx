import React from 'react'
import { Navbar, NavbarBrand, Container } from 'react-bootstrap'

const Heading = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container className='p-2 justify-content-center'>
        <NavbarBrand href='/'>Teacher Student CRUD Operation</NavbarBrand>
      </Container>
    </Navbar>
  )
}

export default Heading
