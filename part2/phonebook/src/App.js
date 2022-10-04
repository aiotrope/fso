import { Persons } from "./Components/Persons";
import { PersonForm } from "./Components/PersonForm";
import { Filter } from "./Components/Filter";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  
  const [persons, setPersons] = useState([]);
  // function pass as a props to PersonForm
  const updatePersonsCollection = (newEntry) => {
    setPersons([...persons, newEntry]);
  };
  const [search, setSearch] = useState("");

/* get the initial persons data from dummy json data
*/
  const urlDB = "http://127.0.0.1:3001/persons";
  const promise = axios.get(urlDB);
 
  useEffect(() => {
    promise.then((res) => {
      const init = res.data;
      console.log(init);
      setPersons(init);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      {/* pass props as variable to child component
       * for access from base component App.js
       */}
      <Filter personsData={persons} search={search} setSearch={setSearch} />

      <h3>Add a new</h3>
      <PersonForm
        updatePersonsCollection={updatePersonsCollection}
        persons={persons}
      />
      <h3>Numbers</h3>
      {/* access props persons and search
       */}
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
