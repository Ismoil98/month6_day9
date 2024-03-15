import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <Navbar.Brand as="span">LOGO</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link to="/business">
              <Nav.Link as="span">Business</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link as="span">About</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link as="span">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
