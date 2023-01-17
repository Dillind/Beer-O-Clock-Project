import BeerCard from "./BeerCard";

import AsahiSingle from "../img/beer-images/Asahi/single-beer.png";
import BottleOpener from "../img/bottle-opener.png";

export default function JapaneseBeerCards() {
  return (
    <div>
      <BeerCard
        // Asahi
        id="1"
        img={AsahiSingle}
        bottleopener={BottleOpener}
        name="Asahi"
        desc="Beer Description"
        type="International Beer"
        size="330mL"
        standardDrinks="1.3"
        alcoholVolume="5%"
        closure="Crown Seal"
        beerStyle="Lager"
        Danlink="https://www.danmurphys.com.au/product/DM_98903/asahi-super-dry-bottles-330ml?isFromSearch=false&isPersonalised=false&isSponsored=false&pageName=member_offers"
        Bwslink="https://bws.com.au/product/98903/asahi-super-dry-bottles-330ml"
        Liqlink="https://www.liquorland.com.au/beer/asahi-super-dry-bottle-330ml_21944?uom=ea"
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
