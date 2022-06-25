import React from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import logo from '../image/logo.jpg'
import { FaUser, FaSearch } from "react-icons/fa";
export default function Header() {
    return (
        <>
            <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#4e61a6' }}>
                <Container>
                    <Navbar.Brand href="#home" ><img src={logo} alt="" id="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto "></Nav>
                        <Nav >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 "
                                aria-label="Search"
                                id="search"
                            />
                            {/* <FaSearch/> */}
                            <Nav.Link href="#home"><FaUser /></Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
