import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // get only the values of property name in array of objects
    const copy = [...persons];
    const nameArr = copy.map((el) => el.name);
    // check for match entry
    const haveMatch = nameArr.includes(newName);
    const result = haveMatch
      ? alert(`${newName} is already added to phonebook`) // alert for match
      : setPersons((tempPersons) => [...tempPersons, { name: newName }]); // add only if there is no match

    // reset form
    setNewName("");

    return result;
  };

  const onChange = (event) => {
    setNewName(() => event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name: <input onChange={onChange} value={newName} type="text" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => {
        return <div key={index}>{person.name}</div>;
      })}
    </div>
  );
};

export default App;
