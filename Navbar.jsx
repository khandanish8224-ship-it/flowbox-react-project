function Navbar() {

  return (

    <nav className="navbar">

      <div className="nav-left">

        <a href="#services">Services</a>
        <a href="#features">Features</a>
        <a href="#blog">Blog</a>
        <a href="#services">Services</a>

      </div>


      <div className="logo">
        Flowbox
      </div>


      <div className="nav-right">

        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>

        <button>
          Get started →
        </button>

      </div>

    </nav>

  );
}

export default Navbar;
