export const Persons = (props) => {
  const persons = props.persons; // props from base component
  const search = props.search; // props from base component

  const data = persons.map((el, index) => {
    return (
      <div key={index}>
        {el.name} {el.number}
      </div>
    );
  });

  // filter and search array persons againts search prop
  const filterSearch = persons
    .filter((person) => {
      if (person.name.toUpperCase().includes(search.toUpperCase())) {
        return data;
      } else {
        return "";
      }
    })
    .map((el, index) => {
      return (
        <div key={index}>
          {el.name} {el.number}
        </div>
      );
    });
  return <>{filterSearch}</>;
};
