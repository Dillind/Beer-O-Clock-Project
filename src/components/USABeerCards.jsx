import BeerCard from "./BeerCard";

import MillerSingle from "../img/beer-images/Miller/single-beer.png";
import BottleOpener from "../img/bottle-opener.png";

export default function USABeerCards() {
  return (
    <div>
      <BeerCard
        // Miller
        id="1"
        img={MillerSingle}
        bottleopener={BottleOpener}
        name="Miller"
        desc="Beer Description"
        type="International Beer"
        size="330mL"
        standardDrinks="1.2"
        alcoholVolume="4.7%"
        closure="Crown Seal"
        beerStyle="Lager"
        Danlink="https://www.danmurphys.com.au/product/DM_365420/miller-genuine-draft-330ml?isFromSearch=true&isPersonalised=false&isSponsored=false&pageName=category_page"
        Bwslink="https://bws.com.au/product/365420/miller-genuine-draft"
        Liqlink="https://www.liquorland.com.au/beer/miller-genuine-draft-bottle-330ml_90223?uom=ea"
      />
      {
        // VB
        // <BeerCard
        //   id="2"
        //   img={VictoriaBitterSingle}
        //   desc="Beer Description"
        //   // "Mid strength meets full flavour. Golden Cluster hops brewed with the finest ingredients to give the lager its signature taste - a smooth, balanced flavour and body, complemented by mild bitterness. As soon as it hits your lips, you'll know exactly why it's a favourite with Aussies everywhere - and what we mean when we say it's Good as GOLD."
        //   type="Australian Beer"
        //   size="375mL"
        //   standardDrinks="1.4"
        //   alcoholVolume="4.9%"
        //   closure="Twist Top"
        //   beerStyle="Lager"
        // />
      }
      {
        // XXXX Gold
        // <BeerCard
        //   id="3"
        //   img={GoldSingle}
        //   desc="Beer Description"
        //   type="Australian Beer"
        //   size="375mL"
        //   standardDrinks="1"
        //   alcoholVolume="3.5%"
        //   closure="Twist Top"
        //   beerStyle="Lager"
        // />
      }
    </div>
  );
}
