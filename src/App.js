import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Offcanvas, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="sticky-top" style={{ backgroundColor: '#434343' }}>
      <Navbar expand="xl">
        <Container fluid className="align-items-center">
          <Navbar.Brand href="index.html">
            <img src="./assets/image/areview-header.png" alt="LOGO" width="200" height="100%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Form className="d-flex column-gap-2 align-items-center ms-auto order-lg-2" role="search">
              <InputGroup>
                <FormControl type="search" placeholder="Search" aria-label="Search" />
                <Button variant="outline-light" href="index.html">
                  <i className="fas fa-search" style={{ width: '20px', height: '100%' }}></i>
                </Button>
                <Button variant="outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                  <i className="fas fa-user" style={{ width: '20px', height: '100%' }}></i>
                </Button>
              </InputGroup>
            </Form>
            <Nav className="navbar-nav d-flex flex-fill text-center order-lg-1">
              <Nav.Item className="flex-fill">
                <Nav.Link href="movies.html">cinéma</Nav.Link>
              </Nav.Item>
              {/* Ajoutez des liens pour les autres catégories ici */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas scroll={true} tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasWithBothOptionsLabel">Se connecter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Insérez le formulaire de connexion ici */}
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
