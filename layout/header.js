import Image from "next/image"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


export default function Header() {  
    return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
            <Link href="/">
                <Image src="/logo.gif" width={300} height={60} alt="Herbert Web Developer" />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="ml-auto">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', justifyContent: 'end' }}
            navbarScroll
          >
            <Nav.Item>
            <Link href="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
            <Link href="/curriculum" passHref>Curriculum</Link>
            </Nav.Item>
            <Nav.Item>
            <Link href="/#work">Work</Link>
            </Nav.Item>
            <Nav.Item>
            <Link href="/contact">Contact</Link>
            </Nav.Item>
            <Nav.Item className="phone">
            <strong>+55 11 985988444</strong>
            </Nav.Item>
            <Nav.Link href="#action2">EN</Nav.Link>
            <Nav.Link href="#action2">PT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}