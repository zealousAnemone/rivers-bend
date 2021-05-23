import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <span className="sitename"><Link href="/">River's Bend</Link></span>
      <nav>
        <Link href="/cabin">The Cabin</Link>
        <Link href='/policies'>Policies</Link>
        <Link href="/attractions">Attractions</Link>
        <Link href="/reserve">Reserve</Link>
      </nav>
    </header>
  )
}

export default Header;