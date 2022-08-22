import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
      <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://images.unsplash.com/photo-1439754389055-9f0855aa82c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              width="100px"
              height="100px"
              className="d-inline-block align-top"
              alt="logo ALLDIA"
            />
          </Navbar.Brand>
        </Container>
        <Navbar.Brand href="#nombreMarca">Relojes All Dia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">HOME</Nav.Link>
            <Nav.Link href="#productos">PRODUCTOS</Nav.Link>
            <NavDropdown title="ALL DIA ECOLOGICOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mujer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SUMMER 2023</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;