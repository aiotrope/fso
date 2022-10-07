import { useState } from "react";
import { ShowInfo } from "./ShowInfo";

const Short = ({ countriesInfo, search, setCountryData }) => {
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
            <div key={index}>
              {el.name.common}
              <button value={el.name.common} onClick={onClick}>
                show
              </button>
            </div>
          );
        })}
    </>
  );
};

export const FewerInfo = ({ countriesInfo, search }) => {
  // country info for specific query if button is clicked
  const [countryData, setCountryData] = useState("");

  return (
    <>
      <Short
        countriesInfo={countriesInfo}
        search={search}
        setCountryData={setCountryData}
      />
      {countryData && (
        <ShowInfo countriesInfo={countriesInfo} countryData={countryData} />
      )}
    </>
  );
};
