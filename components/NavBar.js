/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/park/parks">
              <Nav.Link>Explore</Nav.Link>
            </Link>
            <Link passHref href="/review/reviews">
              <Nav.Link>Reviews</Nav.Link>
            </Link>
            <Link passHref href="/favorite/favorites">
              <Nav.Link>View Favorites</Nav.Link>
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Button className="justify-content-end" variant="success" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
