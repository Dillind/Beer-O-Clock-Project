export default function Navbar() {
  return (
    <header>
      {/* <img
          src="../src/img/beer-icon.png"
          alt="Beer Icon"
          className="nav--logo"
        /> */}
      <h1 className="nav--title">Beer-O-Clock</h1>
      <input type="checkbox" class="nav--toggle" id="nav--toggle" />

      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#GetStarted">Get Started</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <label for="nav--toggle" className="nav--toggle--label">
        <span></span>
      </label>
    </header>
  );
}

// To do:

// 1/ Create main headline with either (a) Beer icon rotating OR (b) clock icon rotating.

// 2/ Home, About, Get Started, Search Bar Tabs.
// - Clickable functionality that takes you to designated areas.

// 3/ Light Mode/ Dark Mode Functionality.

// extras:
// - add the shadowbox border (see airBNB clone project)
// - overall colour theme/palette of page should be a
// - #F6AE2D, #F2A541, F9A620,
