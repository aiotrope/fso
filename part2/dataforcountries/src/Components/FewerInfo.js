export const FewerInfo = ({ countryInfo, search }) => {
    // extra component for countries 
  const short = countryInfo
    .filter((country, i) =>
      country.name.official.toUpperCase().includes(search.toUpperCase())
    )
    .map((el, index) => {
      return <div key={index}>{el.name.common}</div>;
    });

  return short;
};
