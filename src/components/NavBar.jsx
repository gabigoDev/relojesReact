import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Navbar bg="secondary" expand="lg">
            <Container>
                <Container>
                    <Navbar.Brand to="#home">
                        <img
                            src="/AllDiaRelojes.png"
                            width="300px"
                            className="d-inline-block align-top"
                            alt="logo ALLDIA"
                        />
                    </Navbar.Brand>
                </Container>
                <Navbar.Brand to="#nombreMarca">Relojes All Dia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/inicio" as={NavLink} className="text-white">HOME</Nav.Link>
                        <Nav.Link to ="/productos" as={NavLink} className="text-white">PRODUCTOS</Nav.Link>
                        <NavDropdown variant="light"
                            title="ALL DIA ECOLOGICOS"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item to="#action/3.1">
                                Hombre
                            </NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2" >
                                Mujer
                            </NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3" >
                                SUMMER 2023
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget items="7" />
        </Navbar>
    );
};

export default NavBar;
