import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="mb-5">
            <Navbar bg="light" variant="light" fixed="top" collapseOnSelect expand="lg" >
                <Container >
                    <Nav.Link className='text-dark' ><Link id='menu-items' to="/home">Classic Medical Institute</Link></Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#events">Events</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="primary">Logout</Button> :
                            <Nav.Link as={Link} to="/login"><Button variant="primary">Login</Button></Nav.Link>}
                        <Navbar.Text className="ps-2"><Nav.Link href="#login">{user?.displayName}</Nav.Link></Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;