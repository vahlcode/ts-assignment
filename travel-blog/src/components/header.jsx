import Nav from './nav';

function Header() {
  return (
    <header className="header">
        <div className="branding">
            <h1 className="site-title">Travelize</h1>
            <p className="site-description">My Traveling Experiences</p>
        </div>
        <Nav />
    </header>
  );
}

export default Header;
