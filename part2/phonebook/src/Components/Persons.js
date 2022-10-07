export const Persons = ({ persons, search }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toUpperCase().includes(search.toUpperCase())
        )
        .map((el, index) => {
          return (
            <div key={index}>
              {el.name} {el.number}
            </div>
          );
        })}
    </>
  );
};
