import { Persons } from "./Components/Persons";
import { PersonForm } from "./Components/PersonForm";
import { Filter } from "./Components/Filter";
import { useEffect, useState } from "react";
import personsService from "./Components/services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  // function pass as a props to PersonForm
  // as callback
  const updatePersonsCollection = (newEntry) => {
    // call post request from service
    personsService
      .create(newEntry)
      .then((response) => {
        console.log(response.data)
        setPersons([...persons, response.data]);
      })
      .catch((err) => console.log(err));
  };
  const [search, setSearch] = useState("");

  /* get the initial persons data from dummy json data
   */

  useEffect(() => {
    // call get request from service
    personsService.getAll().then((res) => {
      const init = res.data;
      //console.log(init);
      setPersons(init);
    });
  }, []);

  console.log("Added persons: ", persons)
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
