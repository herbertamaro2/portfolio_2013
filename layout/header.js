import Image from "next/image"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router'


export default function Header() { 
  const { locale, locales, asPath } = useRouter(); 
    return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
            <Link href="/">
                <Image src="/logo.gif" width={300} height={60} alt="Herbert Web Developer" priority />
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
            <Link href="/">{(locale === 'pt') ?('Ínicio') :('Home')}</Link>
            </Nav.Item>
            <Nav.Item>
            <Link href="/curriculum" passHref>{(locale === 'pt') ?('Curriculo') :('Curriculum')}</Link>
            </Nav.Item>
            <Nav.Item>
            <Link href="/#work">{(locale === 'pt') ?('Projetos') :('Work')}</Link>
            </Nav.Item>
            <Nav.Item>
            <Link href="/contact">{(locale === 'pt') ?('Contato') :('Contact')}</Link>
            </Nav.Item>
            <Nav.Item className="phone">
            <strong>+55 11 985988444</strong>
            </Nav.Item>
            {locales.map((l, i) => {
            return (
              <Nav.Item key={i} className={l === locale ? 'selected' : ''}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </Nav.Item>
            );
          })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}