import Persons from "./Components/Persons";
import PersonForm from "./Components/PersonForm";
import { useState } from "react";

const App = () => {
  const initialPersonsState = {
    name: "Arto Hellas",
    phonenumber: "040-123456",
  };
  // initial state of array persons
  const [persons, setPersons] = useState([initialPersonsState]);
  // function pass as a props to PersonForm
  const updatePersonsCollection = (newEntry) => {
    setPersons([...persons, newEntry]);
  };

  //console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new</h3>
      <PersonForm updatePersonsCollection={updatePersonsCollection} />
      <h3>Numbers</h3>

      {persons.map((person, index) => {
        return (
          <div key={index}>
            <Persons name={person.name} phonenumber={person.phonenumber} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
