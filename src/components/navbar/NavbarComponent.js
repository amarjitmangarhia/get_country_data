import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Link style={{textDecoration: "none"}} to="/">   <Navbar.Brand>Country Data App</Navbar.Brand></Link>
          <Nav className="me-auto">
          <Link  style={{textDecoration: "none"}} to="/">  <Nav.Link href="#home">Home</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar> */}
      
    </>
  );
}

export default NavbarComponent;