import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="logo">Flowbox</div>

        <div className="menu">
          <a href="#">Services</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Pricing</a>
        </div>

        <button>Get started</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <p className="small-text">MEET OUR TEAM</p>

        <h1>
          A team that works
          <br />
          together
        </h1>

        <p className="hero-text">
          We are a small team of creative people who love
          building simple and useful digital products.
        </p>

        <button className="black-button">Meet the team</button>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet our team</h2>

        <div className="team-box">
          <div className="person">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
              alt="team"
            />
            <h3>Sarah Wilson</h3>
            <p>Designer</p>
          </div>

          <div className="person">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
              alt="team"
            />
            <h3>John Smith</h3>
            <p>Developer</p>
          </div>

          <div className="person">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
              alt="team"
            />
            <h3>Emily Brown</h3>
            <p>Marketing</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div>
          <p className="small-text">WHAT WE DO</p>
          <h2>We make ideas simple.</h2>
        </div>

        <p>
          Our team works together to create websites and digital
          experiences that are easy to use and look good on every
          screen.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <h2>Let's work together.</h2>
        <p>© 2026 Flowbox</p>
      </footer>
    </div>
  );
}

export default App;
