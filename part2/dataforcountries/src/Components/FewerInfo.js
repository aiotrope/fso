import { useState } from "react";

export const FewerInfo = ({ countriesInfo, search }) => {
  // country info for specific query if button is clicked
  const [countryData, setCountryData] = useState("");

  const onClick = (event) => {
    // target button value
    setCountryData(event.target.value);
  };
  // display countries not more than 10 with button that shows data
  const short = countriesInfo
    .filter((country, i) =>
      country.name.official.toUpperCase().includes(search.toUpperCase())
    )
    .map((el, index) => {
      return (
        <section key={index}>
          {el.name.common}{" "}
          <button value={el.name.common} onClick={onClick}>
            show
          </button>
        </section>
      );
    });

  const showInfo = countriesInfo
    .filter((element) => element.name.common.includes(countryData))
    .map((country, idx) => {
      // access the langauge object
      const langObj = country["languages"];
      const newLangObj = {};
      // reassigned obj to prevent type error of null and undefined objects
      const langReassignObj = Object.assign(newLangObj, langObj);
      // access the values on the displaced obj
      const langArr = Object.values(langReassignObj);
      //console.log(country.name.common)
      return (
        <section key={idx}>
          <h2>{country.name.common}</h2>
          capital {country.capital}
          <br />
          area {country.area}
          <br />
          <h3>languages:</h3>
          {langArr.map((el, i) => {
            return (
              <div key={i}>
                <li style={{ marginLeft: "1.9rem" }}>{el}</li>
              </div>
            );
          })}
          <div style={{ marginTop: "1rem" }}>
            <img
              src={country.flags.png}
              alt={`flag of ${country.name.official}`}
            />
          </div>
        </section>
      );
    });

  return (
    <>
      {short}

      {countryData && showInfo}
    </>
  );
};
