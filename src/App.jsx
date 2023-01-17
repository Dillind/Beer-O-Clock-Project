import Navbar from "../src/components/Navbar";
import Content from "../src/components/Content";
import Footer from "../src/components/Footer";
// import AusData from "./components/AusData";
import AusBeer from "./components/BeerCard";

export default function App() {
  // *** PROBLEM!: Couldn't figure out how to get it to work without it breaking everything else. ***
  // const cards = AusData.map((item) => {
  //   return (
  //     <AusBeer
  //       key={item.id}
  //       type={item.type}
  //       img={item.img}
  //       desc={item.desc}
  //       size={item.size}
  //       standardDrinks={item.standardDrinks}
  //       alcoholVolume={item.alcoholVolume}
  //       closure={item.closure}
  //       beerStyle={item.beerStyle}
  //     />
  //   );
  // });

  return (
    <div className="page--container">
      <div className="content--wrap">
        <Navbar />
        <div className="card--wrap">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ROUTE STUFF IN HERE???
