import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar expand="md">
      <Navbar.Brand id="sitename"><Link href="/">River's Bend</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Item><Link href="/cabin">The Cabin</Link></Nav.Item>
        <Nav.Item><Link href="/photos">Photos</Link></Nav.Item>
        <Nav.Item><Link href='/policies'>Policies</Link></Nav.Item>
        <Nav.Item><Link href="/attractions">Attractions</Link></Nav.Item>
        <Nav.Item><Link href="/reserve">Reserve</Link></Nav.Item>
        </Nav>
     </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;