import { useEffect, useState } from "react";
// import GreatNorthern from "./AustralianBeers/GreatNorthern";
import USABeerCards from "./USABeerCards";
import AustralianBeerCards from "./AustralianBeerCards";
import JapaneseBeerCards from "./JapaneseBeerCards";

export default function CountryDropdown() {
  const [country, setCountry] = useState("selectCountry");

  const [
    australianbeercardsContentVisible,
    setAustralianBeerCardsContentVisible,
  ] = useState(false);
  const [japanesebeercardsContentVisible, setJapaneseBeerCardsContentVisible] =
    useState(false);
  const [usabeercardsContentVisible, setUSABeerCardsContentVisible] =
    useState(false);

  useEffect(() => {
    country === "australia"
      ? setAustralianBeerCardsContentVisible(true)
      : setAustralianBeerCardsContentVisible(false);
    country === "japan"
      ? setJapaneseBeerCardsContentVisible(true)
      : setJapaneseBeerCardsContentVisible(false);
    country === "United States"
      ? setUSABeerCardsContentVisible(true)
      : setUSABeerCardsContentVisible(false);
  }, [country]);

  const handleOnChange = (e) => {
    setCountry(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    country === "selectCountry"
      ? (result = "Get Started")
      : (result = makeFirstLetterCapital(country));
    return result;
  };

  return (
    <div className="container mt-3">
      <div>
        <h1>
          <u>{renderResult()}</u>
        </h1>
      </div>
      <div className="mt-4">
        <select
          className="form-select"
          value={country}
          onChange={handleOnChange}
        >
          <option value="selectCountry">Select your Country</option>
          <option value="australia">Australia</option>
          <option value="japan">Japan</option>
          <option value="United States">USA</option>
        </select>
      </div>
      {australianbeercardsContentVisible && <AustralianBeerCards />}
      {japanesebeercardsContentVisible && <JapaneseBeerCards />}
      {usabeercardsContentVisible && <USABeerCards />}
    </div>
  );
}

// <--- COUNTRY-LIST-DROPDOWN --->

// *** Problem: Couldn't figure out how to render a react component based on the dropdown selection with countryList package. ***

// import React, { useState, useMemo } from "react";
// import Select from "react-select";
// import countryList from "react-select-country-list";

// export default function Dropdown() {
//   const [value, setValue] = useState("");
//   const options = useMemo(() => countryList().getData(), []);

//   const changeHandler = (value) => {
//     setValue(value);
//   };

//   return <Select options={options} value={value} onChange={changeHandler} />;
// }
