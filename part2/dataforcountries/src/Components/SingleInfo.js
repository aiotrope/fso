import { WeatherInfo } from "./WeatherInfo";
export const SingleInfo = ({ countriesInfo, search }) => {
  const data = countriesInfo
    .filter((c) => c.name.official.toUpperCase().includes(search.toUpperCase()))
    .map((country, idx) => {
      // access the langauge object
      const langObj = country["languages"];
      const newLangObj = {};
      // reassigned obj to prevent type error of null and undefined objects
      const langReassignObj = Object.assign(newLangObj, langObj);
      // access the values on the displaced obj
      const langArr = Object.values(langReassignObj);

      //console.log(country);

      return (
        <>
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
            <WeatherInfo countryCapital={country.capital}/>
          </section>
          
        </>
      );
    });
  return data;
};
