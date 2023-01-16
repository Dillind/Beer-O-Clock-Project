import { useState } from "react";

export default function Dropdown() {
  const [country, setCountry] = useState("selectCountry");

  const handleOnChange = (e) => {
    setCountry(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    country === "selectCountry"
      ? (result = "select your country")
      : (result = makeFirstLetterCapital(country));
    return result;
  };

  return (
    <div className="container mt-3">
      <div>
        <h1>{renderResult()}</h1>
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
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
  );
}

// <--- COUNTRY-LIST-DROPDOWN --->

// *** Problem: Couldn't figure out how to render a react component based on the dropdown selection. ***

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
