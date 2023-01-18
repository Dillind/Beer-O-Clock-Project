export default function BeerCard(props) {
  return (
    <div className="card">
      <div className="top--card">
        <div className="image--container">
          <h4>{props.name}</h4>
          <img src={props.img} className="beer--image" />
        </div>
        <div className="retail--container">
          <div className="retail--images--container">
            <a href={props.Danlink}>
              <img
                src="../src/img/stores-imgs/dan-murphys.png"
                className="dan-murphys"
              />
            </a>
            <a href={props.Bwslink}>
              <img src="../src/img/stores-imgs/bws.png" className="bws" />
            </a>
            <a href={props.Liqlink}>
              <img
                src="../src/img/stores-imgs/liquorland.png"
                className="liquorland"
              />
            </a>
          </div>
        </div>
      </div>
      {props.closure === "Crown Seal" && (
        <h4 className="bottle-opener-warning">
          <img src={props.bottleopener} className="bottle-opener" />
          You will need a bottle opener to open this product.
        </h4>
      )}
      <h4 className="about--beer">About this product:</h4>
      <hr />
      <h4 className="beer--description">{props.desc}</h4>
      <div className="card--stats--container">
        <h4>Product Information</h4>
        <div className="card--stats">
          <ul>
            <li>
              <span>
                <b>Type: </b>
              </span>
              <span>{props.type}</span>
            </li>
            <hr />
            <li>
              <span>
                <b>Size:</b>
              </span>
              <span>{props.size}</span>
            </li>
            <hr />
            <li>
              <span>
                <b>Standard Drinks:</b>
              </span>
              <span>{props.standardDrinks}</span>
            </li>
            <hr />
            <li>
              <span>
                <b>Alcohol Volume:</b>
              </span>
              <span>{props.alcoholVolume}</span>
            </li>
            <hr />
            <li>
              <span>
                <b>Closure:</b>
              </span>
              <span>{props.closure}</span>
            </li>
            <hr />
            <li>
              <span>
                <b>Beer Style: </b>
              </span>
              <span>{props.beerStyle}</span>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
}
