import { Persons } from "./Components/Persons";
import { PersonForm } from "./Components/PersonForm";
import { Filter } from "./Components/Filter";
import { useState } from "react";

const App = () => {
  const initialPersonsState = [
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ];

  // initial state of array persons
  const [persons, setPersons] = useState(initialPersonsState);
  // function pass as a props to PersonForm
  const updatePersonsCollection = (newEntry) => {
    setPersons([...persons, newEntry]);
  };

  const [search, setSearch] = useState("");

  //console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      {/* pass props as variable to child component
       * for access from base component App.js
       */}
      <Filter personsData={persons} search={search} setSearch={setSearch} />

      <h3>Add a new</h3>
      <PersonForm updatePersonsCollection={updatePersonsCollection} persons={persons}/>
      <h3>Numbers</h3>
      {/* access props persons and search
       */}
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
