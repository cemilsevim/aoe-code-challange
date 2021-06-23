import React from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import {
    Link,
} from "react-router-dom";

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Age of Empires</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Link className="nav-link" to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/units">Units</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;