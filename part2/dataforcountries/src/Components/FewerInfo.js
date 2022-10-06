import { useState } from "react";
import ShowInfo from "./ShowInfo";

export const FewerInfo = ({ countriesInfo, search }) => {
  // country info for specific query if button is clicked
  const [countryData, setCountryData] = useState("");
  //const [weatherInfo, setWeatherInfo] = useState([]);

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

  const show = (
    <ShowInfo countriesInfo={countriesInfo} countryData={countryData} />
  );
  return (
    <>
      {short}
      {countryData && show}
    </>
  );
};
