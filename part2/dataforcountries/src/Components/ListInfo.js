import { useState } from "react";
import { WeatherInfo } from "./WeatherInfo";

const CountryButton = ({ search, countriesInfo, setCountryData }) => {
  const onClick = (event) => {
    // target button value
    setCountryData(event.target.value);
  };
  return (
    <>
      {countriesInfo
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
        })}
    </>
  );
};

const ShowInfo = ({ countryData, countriesInfo }) => {
  return (
    <>
      {countriesInfo
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
              <WeatherInfo countryCapital={country.capital} />
            </section>
          );
        })}
      ;
    </>
  );
};

export const ListInfo = ({ countriesInfo, search }) => {
  // country info for specific query if button is clicked
  const [countryData, setCountryData] = useState("");

  return (
    <>
      <CountryButton
        countriesInfo={countriesInfo}
        search={search}
        setCountryData={setCountryData}
      />

      {countryData && (
        <ShowInfo countryData={countryData} countriesInfo={countriesInfo} />
      )}
    </>
  );
};
