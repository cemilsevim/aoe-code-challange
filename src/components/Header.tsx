import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
    NavLink
} from "react-router-dom";

function Header(): JSX.Element {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Age of Empires</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <NavLink className="nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" activeClassName="active" to="/units">Units</NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;