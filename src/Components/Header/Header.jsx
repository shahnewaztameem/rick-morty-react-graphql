import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar
      className='pt-0'
      bg='dark'
      variant='dark'
      expand='lg'
      collapseOnSelect
    >
      <Container fluid className='mx-5 px-5'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link className='mr-3'>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/characters'>
              <Nav.Link className='mr-3'>Characters</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/episodes'>
              <Nav.Link className='mr-3'>Episodes</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/locations'>
              <Nav.Link className='mr-3'>Locations</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
