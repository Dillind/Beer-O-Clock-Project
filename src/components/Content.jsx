// import Home from "../components/nav-menu/Home";
// import About from "../components/nav-menu/About";
import CountryDropdown from "./CountryDropdown";
export default function Content() {
  return (
    <main>
      <section className="country-selector">
        {/* <h4>Select Country</h4> */}
      </section>
      <section className="drop-down">
        <CountryDropdown />
      </section>
    </main>
  );
}

// Components:

// 1/ Select Country
// - Drop down functionality
// When selected, it takes you to a list of Beers.

// 2/ List of Beers from Chosen Country
// - Multiple images of beers from selected country will be displayed for the user, which include:
//    - image of beer, name of beer, short description of beer, vol. of beer, star rating, add to cart?? See link: https://www.danmurphys.com.au/product/DM_839496/great-northern-brewing-co-super-crisp-3-5-lager-bottles-330ml
// - Once clicked on, it focuses on that sole beer, zoomed in description + image, hover effect, background blurred.

// USE PROPS:
// Example:

{
  /* <Content
img={beer-name.png} 
name="Great Northern Brewing Co."
description=""

/> */
}

// 3/

// LINKING PAGES??
// <main>
//   <h1>
//     <Link to="#home" smooth>
//       Home
//     </Link>
//     <Link to="#about" smooth>
//       About
//     </Link>
//   </h1>
//   <About />
//   <Home />
// </main>
