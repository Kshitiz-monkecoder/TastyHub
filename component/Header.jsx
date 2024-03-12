import Link from 'next/link';


export default function Header() {
    return (
      <>
        <nav className='header'>
            <div className="logo">
        <img src="/img/logo.png" alt="Logo" />
      </div>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/recipes">
              Recipes
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Indulge Your Palate</h1>
      </>
    );
};