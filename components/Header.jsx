import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar expand="md">
      <Navbar.Brand><Link href="/">River's Bend</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link href="/cabin">The Cabin</Link>
        <Link href="/photos">Photos</Link>
        <Link href='/policies'>Policies</Link>
        <Link href="/attractions">Attractions</Link>
        <Link href="/reserve">Reserve</Link>
        </Nav>
     </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;