import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // without Boostrap

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Recipes</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favList">Favorite List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;