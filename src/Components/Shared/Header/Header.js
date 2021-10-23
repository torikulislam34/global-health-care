import React from 'react';
import './Header.css'
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar className='full-nav' bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"><span className='title'>Global Healthcare</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home"><span className='route'>Home</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"><span className='route'>Services</span></Nav.Link>
                        <Nav.Link as={HashLink} to="specialists"><span className='route'>Specialist</span></Nav.Link>
                        <Nav.Link as={HashLink} to='/login'>Login</Nav.Link>
                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;