import businessInfo from "../data/businessInfo";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <h1 className="logo">{businessInfo.name}</h1>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#product">Product</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;