export const FewerInfo = ({ countryInfo, search }) => {
  const short = countryInfo
    .filter((country, i) =>
      country.name.official.toUpperCase().includes(search.toUpperCase())
    )
    .map((el, index) => {
      return <div key={index}>{el.name.common}</div>;
    });

  return short;
};
