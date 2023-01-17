import BeerCard from "./BeerCard";
import GreatNorthernSingle from "../img/beer-images/great-northern/single-beer.png";
import VictoriaBitterSingle from "../img/beer-images/VB/single-beer.png";
import GoldSingle from "../img/beer-images/Gold/single-beer.png";
import BottleOpener from "../img/bottle-opener.png";

export default function AustralianBeerCards() {
  return (
    <div>
      <BeerCard
        // Great Northern
        id="1"
        name="Great Northern"
        img={GreatNorthernSingle}
        bottleopener={BottleOpener}
        desc="Beer Description"
        type="Australian Beer"
        size="330mL"
        standardDrinks="1.1"
        alcoholVolume="4.2%"
        closure="Crown Seal"
        beerStyle="Lager"
        Danlink="https://www.danmurphys.com.au/product/DM_365986"
        Bwslink="https://bws.com.au/product/638915/great-northern-brewing-company-original-lager-bottles-700ml"
        Liqlink="https://www.liquorland.com.au/beer/great-northern-original-lager-bottle-330ml_7973910?uom=ea"
      />
      {
        // VB
        <BeerCard
          id="2"
          name="Victoria Bitter"
          img={VictoriaBitterSingle}
          bottleopener={BottleOpener}
          desc="Beer Description"
          // "Mid strength meets full flavour. Golden Cluster hops brewed with the finest ingredients to give the lager its signature taste - a smooth, balanced flavour and body, complemented by mild bitterness. As soon as it hits your lips, you'll know exactly why it's a favourite with Aussies everywhere - and what we mean when we say it's Good as GOLD."
          type="Australian Beer"
          size="375mL"
          standardDrinks="1.4"
          alcoholVolume="4.9%"
          closure="Twist Top"
          beerStyle="Lager"
          Danlink="https://www.danmurphys.com.au/product/DM_38175/victoria-bitter-bottles-375ml?isFromSearch=false&isPersonalised=false&isSponsored=false&pageName=member_offers"
          Bwslink="https://bws.com.au/search?searchTerm=victoria-bitter"
          Liqlink="https://www.liquorland.com.au/beer/victoria-bitter-bottle-375ml_10078?uom=ea"
        />
      }
      {
        // XXXX Gold
        <BeerCard
          id="3"
          name="XXXX Gold"
          img={GoldSingle}
          bottleopener={BottleOpener}
          desc="Beer Description"
          type="Australian Beer"
          size="375mL"
          standardDrinks="1"
          alcoholVolume="3.5%"
          closure="Twist Top"
          beerStyle="Lager"
          Danlink="https://www.danmurphys.com.au/product/DM_24446/xxxx-gold-lager-bottle-375ml?isFromSearch=true&isSponsored=false&pageName=category_page"
          Bwslink="https://bws.com.au/product/24446/xxxx-gold-lager-bottle-375ml"
          Liqlink="https://www.liquorland.com.au/beer/xxxx-gold-bottle-375ml_35927?uom=ea"
        />
      }
    </div>
  );
}
