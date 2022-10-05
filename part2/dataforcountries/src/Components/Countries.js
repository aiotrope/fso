import { useEffect, useState } from "react";
import axios from "axios";
import { SingleInfo } from "./SingleInfo";
import { FewerInfo } from "./FewerInfo";

export const Countries = ({ search }) => {
  const [countryInfo, setCountryInfo] = useState([]);
  const url = "https://restcountries.com/v3.1/all";
  //const promise = axios.get(url);

  useEffect(() => {
    axios.get(url).then((response) => {
      const res = response.data;
      const dataInfo = res.map((el) => el);
      setCountryInfo(dataInfo);
    });
  }, [countryInfo]);

  const filter = countryInfo
    .filter((country, i) =>
      country.name.official.toUpperCase().includes(search.toUpperCase())
    )
    .map((el, index) => {
      return <div key={index}>{el.name.common}</div>;
    });

  // pass props to other components
  const single = <SingleInfo countryInfo={countryInfo} search={search} />;
  const few = <FewerInfo countryInfo={countryInfo} search={search} />;
  return (
    <div>
      {/* switch and IIFE to render components based on
       * length of array being queried
       */}
      {(() => {
        switch (filter.length) {
          case 0:
            return <></>;
          case 1:
            return single;
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return few;
          default:
            return <>To many matches, specify another filter</>;
        }
      })()}
    </div>
  );
};
