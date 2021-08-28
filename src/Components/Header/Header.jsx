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
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/'>
              <Nav.Link className='me-5'>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/characters'>
              <Nav.Link className='me-5'>Characters</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/episodes'>
              <Nav.Link className='me-5'>Episodes</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/locations'>
              <Nav.Link className=''>Locations</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
