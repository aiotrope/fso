import { WeatherInfo } from "./WeatherInfo";

export const ShowInfo = ({ countriesInfo, countryData }) => {
  return (
    <>
      {countriesInfo
        .filter((element, i) => element.name.common.includes(countryData))
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
            <>
              <div key={idx}>
                <h2>{country.name.common}</h2>
                capital {country.capital}
                <br />
                area {country.area}
                <br />
                <h3>languages:</h3>
                {langArr.map((el, ix) => {
                  return (
                    <li key={ix} style={{ marginLeft: "1.9rem" }}>
                      {el}
                    </li>
                  );
                })}
                {
                  <div style={{ marginTop: "1rem" }}>
                    <img
                      src={country.flags.png}
                      alt={`flag of ${country.name.official}`}
                    />
                  </div>
                }
              </div>
            <WeatherInfo countryCapital={country.capital} />
            </>
          );
        })}
    </>
  );
};
