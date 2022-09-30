import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    //reset form
    event.target.reset();
  };

  const newEntry = () => {
    setPersons((tempArr) => [...tempArr, newName]);
  };

  const handleChange = (event) => {
    event.persist();
    setNewName((newName) => ({ ...newName, name: event.target.value }));
  };
  console.log(newName);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name:{" "}
          <input onChange={handleChange} value={persons.name} type="text" />
        </div>
        <div>
          <button type="submit" onClick={newEntry}>
            add
          </button>
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
